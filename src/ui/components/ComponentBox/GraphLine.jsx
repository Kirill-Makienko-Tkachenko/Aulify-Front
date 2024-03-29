// eslint-disable-next-line no-unused-vars
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
import "./GraphLine.css";

const GraphLine = ({ data }) => {

  return (
    <div className="graph-line">
      
      <div className="x-axis" />
      <div className="y-axis" />

      <LineChart width={500} height={290} data={data}>
        <CartesianGrid />
        <XAxis dataKey="x" />
        <YAxis yAxisId="left-axis" />
        <YAxis yAxisId="right-axis" orientation="right" />
        <Line yAxisId="left-axis" type="monotone" dataKey="y" stroke="green" />
        <Line yAxisId="right-axis" type="monotone" dataKey="z" stroke="red" />
      </LineChart>
    </div>
  );
}

export default GraphLine;

