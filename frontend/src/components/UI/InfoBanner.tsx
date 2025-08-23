import React from 'react';

interface InfoBannerProps {
  message: string;
  type?: 'info' | 'success' | 'warning';
  onAction?: () => void;
  actionLabel?: string;
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ 
  message, 
  type = 'info',
  onAction,
  actionLabel 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      default: return 'ℹ️';
    }
  };

  const getClassName = () => {
    return `info-banner info-banner--${type}`;
  };

  return (
    <div className={getClassName()}>
      <div className="info-content">
        <span className="info-icon">{getIcon()}</span>
        <span className="info-message">{message}</span>
        {onAction && actionLabel && (
          <button 
            onClick={onAction}
            className="info-action-btn"
            type="button"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};
