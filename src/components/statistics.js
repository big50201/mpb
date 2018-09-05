import React from "react";
import { Bar } from 'react-chartjs-2';

const Statistics = (props) => {
  return (
    <div className="statistics" style={{ padding: 24, background: '#fff', minHeight: 600 }}>
      <Bar
        data={props.data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default Statistics;