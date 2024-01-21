// components/BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Lingkunganchart  ({ data })  {
  const Data = data.result
  console.log(data)
  return (
    // <ResponsiveContainer width="100%" height={400}>
      <BarChart width={600} height={400} data={Data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    // </ResponsiveContainer>
  );
};

