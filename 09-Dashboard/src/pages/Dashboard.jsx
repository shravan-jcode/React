import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import StatCard from "../components/StatCard";

function Dashboard() {

  const chartData = [
    {
      name: "Jan",
      users: 400,
    },
    {
      name: "Feb",
      users: 700,
    },
    {
      name: "Mar",
      users: 500,
    },
  ];

  return (
    <div>

      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >

        <StatCard
          title="Users"
          value="1200"
        />

        <StatCard
          title="Orders"
          value="530"
        />

        <StatCard
          title="Revenue"
          value="₹90,000"
        />

      </div>

      <br />

      <BarChart
        width={500}
        height={300}
        data={chartData}
      >

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="users" />

      </BarChart>

    </div>
  );
}

export default Dashboard;