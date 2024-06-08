// src/components/atoms/TableHeader.js
import React from 'react';

const TableHeader = ({ children, colSpan, rowSpan }) => (
  <th className="p-2 border-2" colSpan={colSpan} rowSpan={rowSpan}>
    {children}
  </th>
);

export default TableHeader;
