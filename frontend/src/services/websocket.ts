import { Match } from '../lib/types';
import { parseWebSocketMessage } from '../lib/validators';
import { APP_CONFIG, WS_STATUS } from '../lib/constants';

export type WebSocketStatus = typeof WS_STATUS[keyof typeof WS_STATUS];

export interface WebSocketCallbacks {
  onMessage?: (matches: Match[]) => void;
  onSeasonFinished?: () => void;
  onError?: (error: Error) => void;
  onStatusChange?: (status: WebSocketStatus) => void;
}

export class WebSocketService {
  private ws: WebSocket | null = null;
  private status: WebSocketStatus = WS_STATUS.DISCONNECTED;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000; // Starts with 1 second
  private reconnectTimer: NodeJS.Timeout | null = null;
  private callbacks: WebSocketCallbacks = {};
  private seasonFinished = false;

  constructor(private url: string = APP_CONFIG.WEBSOCKET_URL) { }

  // Connects to WebSocket
  public connect(): void {
    if (this.ws?.readyState === WebSocket.OPEN || this.seasonFinished) {
      console.log('WebSocket: Already connected or season finished, skipping connection');
      return;
    }

    console.log('WebSocket: Attempting to connect to:', this.url);
    this.setStatus(WS_STATUS.CONNECTING);

    try {
      this.ws = new WebSocket(this.url);
      this.setupEventHandlers();
      console.log('WebSocket: Connection initiated');
    } catch (error) {
      console.error('WebSocket: Connection failed:', error);
      this.handleError(error as Error);
    }
  }

  // Disconnects from WebSocket
  public disconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

    this.setStatus(WS_STATUS.DISCONNECTED);
    this.reconnectAttempts = 0;
  }

  // Sets callbacks
  public setCallbacks(callbacks: WebSocketCallbacks): void {
    this.callbacks = callbacks;
  }

  // Gets current status
  public getStatus(): WebSocketStatus {
    return this.status;
  }

  // Checks if season has finished
  public isSeasonFinished(): boolean {
    return this.seasonFinished;
  }

  // Sets up WebSocket event handlers
  private setupEventHandlers(): void {
    if (!this.ws) return;

    this.ws.onopen = () => {
      console.log('WebSocket: Connection opened successfully');
      this.setStatus(WS_STATUS.CONNECTED);
      this.reconnectAttempts = 0;
      this.reconnectDelay = 1000;
    };

    this.ws.onmessage = (event) => {
      console.log('WebSocket: Message received:', event.data);
      try {
        // First check if it's a raw "season finished" message
        if (event.data === 'season finished') {
          console.log('WebSocket: Season finished message received');
          this.handleSeasonFinished();
          return;
        }
        
        // Try to parse as JSON
        const data = JSON.parse(event.data);
        
        // Check if it's season finished message in JSON format
        if (data === 'season finished' || data.type === 'season_finished') {
          console.log('WebSocket: Season finished message received (JSON)');
          this.handleSeasonFinished();
          return;
        }
        
        // Process match message
        const matches = parseWebSocketMessage(data);
        console.log('WebSocket: parseWebSocketMessage result:', matches);
        if (matches && matches.length > 0) {
          console.log('WebSocket: Valid matches received:', matches.length);
          this.callbacks.onMessage?.(matches);
        } else {
          console.log('WebSocket: No valid matches in message');
        }
      } catch (error) {
        // If JSON parsing fails, check if it's a raw string message
        if (typeof event.data === 'string' && event.data.includes('season finished')) {
          console.log('WebSocket: Season finished message received (raw string)');
          this.handleSeasonFinished();
          return;
        }
        
        console.warn('WebSocket: Failed to parse message:', error);
      }
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket: Connection closed:', event.code, event.reason);
      if (!event.wasClean && !this.seasonFinished) {
        console.log('WebSocket: Attempting reconnection...');
        this.handleReconnection();
      } else {
        this.setStatus(WS_STATUS.DISCONNECTED);
      }
    };

    this.ws.onerror = (event) => {
      console.error('WebSocket: Error occurred:', event);
      this.handleError(new Error('WebSocket error occurred'));
    };
  }

  // Handles season finished
  private handleSeasonFinished(): void {
    this.seasonFinished = true;
    this.disconnect();
    this.callbacks.onSeasonFinished?.();
  }

  // Handles automatic reconnection
  private handleReconnection(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts || this.seasonFinished) {
      this.setStatus(WS_STATUS.ERROR);
      this.callbacks.onError?.(new Error('Max reconnection attempts reached'));
      return;
    }

    this.setStatus(WS_STATUS.CONNECTING);
    this.reconnectAttempts++;

    // Exponential backoff
    this.reconnectDelay = Math.min(this.reconnectDelay * 2, 30000);

    this.reconnectTimer = setTimeout(() => {
      this.connect();
    }, this.reconnectDelay);
  }

  // Handles errors
  private handleError(error: Error): void {
    console.error('WebSocket error:', error);
    this.setStatus(WS_STATUS.ERROR);
    this.callbacks.onError?.(error);
  }

  // Updates status and notifies callback
  private setStatus(status: WebSocketStatus): void {
    this.status = status;
    this.callbacks.onStatusChange?.(status);
  }

  // Resets service (useful for testing)
  public reset(): void {
    this.seasonFinished = false;
    this.disconnect();
  }
}
