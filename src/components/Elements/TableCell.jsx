// src/components/atoms/TableCell.js
import React from 'react';

const TableCell = ({ children }) => (
  <td className="p-4 border-2 text-center font-semibold">
    {children}
  </td>
);

export default TableCell;
