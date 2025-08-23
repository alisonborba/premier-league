/** @format */

import React from 'react';

export const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className="table-header table-header--club">
          Club
        </th>
        <th scope="col" className="table-header table-header--club"></th>
        <th scope="col" className="table-header table-header--played">
          MP
        </th>
        <th scope="col" className="table-header table-header--wins">
          W
        </th>
        <th scope="col" className="table-header table-header--draws">
          D
        </th>
        <th scope="col" className="table-header table-header--losses">
          L
        </th>
        <th scope="col" className="table-header table-header--goals-for">
          GF
        </th>
        <th scope="col" className="table-header table-header--goals-against">
          GA
        </th>
        <th scope="col" className="table-header table-header--goal-difference">
          GD
        </th>
        <th scope="col" className="table-header table-header--points">
          Pts
        </th>
        <th scope="col" className="table-header table-header--form">
          Last 5
        </th>
      </tr>
    </thead>
  );
};
