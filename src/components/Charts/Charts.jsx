import ReactApexChart from "react-apexcharts";
import "./Charts.css";
import { BsInfoCircle } from "react-icons/bs";

const ApexChart = () => {
  const series = [
    {
      name: "Sales",
      data: [1404, 800, 450],
    },
    {
      name: "Orders",
      data: [4, 2, 2],
    },
  ];

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: [
        "6/30/2024-7/6/2024",
        "7/7/2024-7/13/2024",
        "7/21/2024-7/27/2024",
      ],
      tickAmount: 0,
    },
    yaxis: [
      {
        title: {
          text: "Sales",
        },
        min: 0,
        max: 1600,
        tickAmount: 4,
        labels: {
          formatter: (value) => {
            return value;
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "Orders",
        },
        min: 0,
        max: 4,
        tickAmount: 4,
        labels: {
          formatter: (value) => {
            return value;
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    colors: ["#45a5a9", "#f29a3f"],
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColor: "#000",
      strokeWidth: 2,
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      floating: true,
      offsetY: -50,
      offsetX: -50,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <div className="chart-container">
      <div className="salesAndIcons">
        <h1 className="salesHeading">Sales vs Orders</h1>
        <BsInfoCircle size={20} />
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={400}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
