/** @format */

import React from 'react';
import { CircleCheck, CircleAlert, Info } from 'lucide-react';

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
  actionLabel,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CircleCheck size={24} />;
      case 'warning':
        return <CircleAlert size={24} />;
      default:
        return <Info size={24} />;
    }
  };

  const getClassName = () => {
    return `info-banner info-banner--${type}`;
  };

  return (
    <div className={getClassName()}>
      <div className="info-content">
        {getIcon()}
        <span className="info-message">{message}</span>
        {onAction && actionLabel && (
          <button onClick={onAction} className="info-action-btn" type="button">
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};
