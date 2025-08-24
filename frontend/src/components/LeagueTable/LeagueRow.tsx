import { Link } from 'react-router-dom';
import { TableRow } from '../../lib/types';
import { LastResults } from './LastResults';
import { formatGoalDifference } from '../../lib/format';
import { getClubImage, getPositionClass } from '../../lib/utils';

interface LeagueRowProps {
  row: TableRow & { position: number };
  className?: string;
}

export const LeagueRow = ({ row, className = '' }: LeagueRowProps) => {
  return (
    <tr className={`table-row ${getPositionClass(row.position)} ${className}`.trim()}>
      <td className="table-cell table-cell--club">
        <Link
          to={`/team/${row.code}`}
          className="club-link"
          aria-label={`View ${row.name} history`}
        >
          {row.position}
          <img src={getClubImage(row.code)} alt={row.name} className="club-logo" />
          {row.name}
        </Link>
      </td>
      <td className="table-cell table-cell--played">{row.played}</td>
      <td className="table-cell table-cell--wins">{row.wins}</td>
      <td className="table-cell table-cell--draws">{row.draws}</td>
      <td className="table-cell table-cell--losses">{row.losses}</td>
      <td className="table-cell table-cell--goals-for">{row.gf}</td>
      <td className="table-cell table-cell--goals-against">{row.ga}</td>
      <td className="table-cell table-cell--goal-difference">{formatGoalDifference(row.gd)}</td>
      <td className="table-cell table-cell--points">
        <strong>{row.points}</strong>
      </td>
      <td className="table-cell table-cell--form">
        <LastResults results={row.form} />
      </td>
    </tr>
  );
};
