import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsInfoCircle } from "react-icons/bs";
import "./PieChartComp.css";
const PieChartComp = () => {
  const series = [1483.722, 1175.278];
  const labels = ["WooCommerce Store", "Shopify Store"];
  const total = series.reduce((acc, val) => acc + val, 0);

  const [centerLabel, setCenterLabel] = useState(`Total: ${total.toFixed(1)}`);

  const options = {
    chart: {
      type: "pie",
      height: "100%",
      width: "100%",
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
          const value = series[config.dataPointIndex];
          const label = labels[config.dataPointIndex];
          setCenterLabel(`${label}: ${value.toFixed(0)}`);
        },
        dataPointMouseLeave: () => {
          setCenterLabel(`Total: ${total.toFixed(0)}`);
        },
      },
    },
    labels: labels,
    plotOptions: {
      pie: {
        customScale: 0.9,
        dataLabels: {
          offset: -5,
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    colors: ["#fa7e7e", "#2cded5"],
    tooltip: {
      enabled: false,
    },
    fill: {
      colors: ["#fa7e7e", "#2cded5"],
    },
  };

  return (
    <div
      id="chart"
      style={{
        position: "relative",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px",
        fontFamily: "sans-serif",
        fontSize: "10px",
      }}
    >
      <div
        className="titleAndIcon2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 className="headingSales">Portion of Sales</h1>
        <BsInfoCircle size={20} />
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={350}
        width={350}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <p className="totalCount">{centerLabel}</p>
      </div>
    </div>
  );
};

export default PieChartComp;
