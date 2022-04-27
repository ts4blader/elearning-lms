import React from "react";
import { Area } from "@ant-design/plots";
import visitRatio from "@seeds/rate/visit.json";

const VisitChart = () => {
  const config = {
    data: visitRatio,
    xField: "date",
    yField: "amount",
    height: 300,
    line: {
      color: "#C83901",
    },
    xAxis: {
      range: [0, 1],
      tickCount: 7,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 1:#FF7506",
      };
    },
    smooth: true,
  };

  return (
    <div className="visit-chart">
      <Area {...config} />
    </div>
  );
};

export default VisitChart;
