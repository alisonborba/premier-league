import { CircleCheck, CircleAlert, Info } from 'lucide-react';

interface InfoBannerProps {
  message: string;
  type: 'success' | 'warning' | 'info';
  actionLabel?: string;
  onAction?: () => void;
}

export const InfoBanner = ({ 
  message, 
  type, 
  actionLabel, 
  onAction 
}: InfoBannerProps) => {
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
