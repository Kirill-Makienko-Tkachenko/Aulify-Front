// eslint-disable-next-line no-unused-vars
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Button } from '@mui/material'; // Import Button from Material-UI
import "./GraphLine.css";

const GraphLine = ({ data }) => {

  return (
    <>

    <div className="buttons-container">

      </div>
      
    <div className="graph-line" >
 
      <div className="x-axis" />
      <div className="y-axis" />

      <LineChart width={500} height={280} data={data}>
        <CartesianGrid />
        <XAxis dataKey="Hourly" />
        <YAxis yAxisId="left-axis" />
        <YAxis yAxisId="right-axis" orientation="right" />
        <Line yAxisId="left-axis" type="monotone" dataKey="ActiveUsers" stroke="green" />
        <Line yAxisId="right-axis" type="monotone" dataKey="z" stroke="red" />
      </LineChart>
    </div>
    </>
  );
}

export default GraphLine;
