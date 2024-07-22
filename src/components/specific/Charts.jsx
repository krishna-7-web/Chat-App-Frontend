/* eslint-disable react/prop-types */
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import {
  orange,
  orangeLight,
  purple,
  purpleLight,
} from "../../constants/color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Messages",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 90,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: [purpleLight, orangeLight],
        hoverBackgroundColor: [purple, orange],
        borderColor: [purple, orange],
        offset: 30,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { DoughnutChart, LineChart };
