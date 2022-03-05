import React from "react";
import { Column } from "@ant-design/plots";
import grade7 from "../seeds/classes/grade-7.json";

type Legend = {
  position: any;
  marker: any;
};

const ColumnGroupChart = () => {
  const config = {
    data: grade7,
    xField: "class",
    yField: "amount",
    height: 300,
    seriesField: "type",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 20, 20],
    },
    columnWidthRatio: 0.3,
    marginRatio: 0.5,

    // dodgePadding: 10,
    // intervalPadding: 200,
    /* ------------- legend ------------- */
    legend: {
      position: "bottom",
      marker: {},
    } as Legend,
    colorField: "type", // or seriesField in some cases
    color: ({ type }: any) => {
      if (type === "excellent") return "#C83901";
      if (type === "good") return "#FF7506";
      if (type === "average") return "#FFA75E";
      if (type === "bad") return "#FFD8B8";
      return "#000000";
    },
  };

  return (
    <div className="column-group-chart">
      <Column {...config} />
    </div>
  );
};

export default ColumnGroupChart;
