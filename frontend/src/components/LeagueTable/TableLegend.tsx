import { Check, Minus, X } from 'lucide-react';

export const TableLegend = () => {
  return (
    <div className="table-legend">
      <div>
        <h4>Qualification/Relegation</h4>
        <div className="legend-item">
          <span className="legend-color legend-color--champions"></span>
          <span>UEFA Champions League group stage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--europa-league"></span>
          <span>Europa League group stage</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--europa-qualifiers"></span>
          <span>Europa League qualifiers</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-color--relegation"></span>
          <span>Relegation</span>
        </div>
      </div>
      <div>
        <h4>Last 5 matches</h4>
        <div className="legend-item">
          <span className="result-pill result-pill--win">
            <Check size={12} strokeWidth={3} />
          </span>{' '}
          Win
        </div>
        <div className="legend-item">
          <span className="result-pill result-pill--draw">
            <Minus size={12} strokeWidth={3} />
          </span>{' '}
          Draw
        </div>
        <div className="legend-item">
          <span className="result-pill result-pill--loss">
            <X size={12} strokeWidth={3} />
          </span>{' '}
          Loss
        </div>
      </div>
    </div>
  );
};
