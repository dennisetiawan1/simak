import React from 'react';

const UserInfo = ({ label, value }) => (
  <tr className="hover:bg-slate-50 text-left">
    <th className="font-bold">{label}</th>
    <td className=""><span className="mr-8">:</span>{value}</td>
  </tr>
);

export default UserInfo;
