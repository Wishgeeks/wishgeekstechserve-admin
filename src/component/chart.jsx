import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Barchart = (props) => {
  Chart.register(...registerables);

  const chartData = {
    labels: props.data.map((val) => val.year),
    datasets: [
      {
        backgroundColor: "#E4CCFF",
        data: props.data.map((val) => val.range1),
        label: "Sign In Users",
      },
      {
        backgroundColor: "#BDE3FF",
        data: props.data.map((val) => val.range2),
        label: "Purchase Users",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {},
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
            color: "black",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        font: {
          weight: "bold",
          color: "black",
        },
      },
    },
  };

  return (
    <div className="w-full  mx-auto p-4">
      <div className="relative w-full h-80">
        <h1 className="font-bold	text-2xl	">Check Your Users </h1>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Barchart;
