/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { TableRow } from '../../lib/types';
import { FormPills } from './FormPills';
import { formatGoalDifference } from '../../lib/format';
import { PREMIER_LEAGUE_CLUBS_2019_2020 } from '../../lib/constants';

interface LeagueRowProps {
  row: TableRow & { position: number };
  className?: string;
}

export const LeagueRow: React.FC<LeagueRowProps> = ({ row, className = '' }) => {
  const getPositionClass = (position: number) => {
    if (position <= 4) return 'table-row--champions-league';
    if (position <= 6) return 'table-row--europa-league';
    if (position >= 18) return 'table-row--relegation';
    return '';
  };

  const getClubImage = (code: string) => {
    const club = PREMIER_LEAGUE_CLUBS_2019_2020.find((club) => club.code === code);
    return club?.imgUrl;
  };

  return (
    <tr className={`table-row ${getPositionClass(row.position)} ${className}`.trim()}>
      <td className="table-cell table-cell--position">{row.position}</td>
      <td className="table-cell table-cell--club">
        <Link
          to={`/team/${row.code}`}
          className="club-link"
          aria-label={`View ${row.name} history`}
        >
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
        <FormPills form={row.form} />
      </td>
    </tr>
  );
};
