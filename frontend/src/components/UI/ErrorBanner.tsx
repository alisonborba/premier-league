import React from 'react';

interface ErrorBannerProps {
  error: Error | null;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ 
  error, 
  onRetry, 
  onDismiss 
}) => {
  if (!error) return null;

  return (
    <div className="error-banner">
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <span className="error-message">{error.message}</span>
        <div className="error-actions">
          {onRetry && (
            <button 
              onClick={onRetry}
              className="error-retry-btn"
              type="button"
            >
              Try Again
            </button>
          )}
          {onDismiss && (
            <button 
              onClick={onDismiss}
              className="error-dismiss-btn"
              type="button"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
