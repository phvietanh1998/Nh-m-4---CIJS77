import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   {
//     name: " A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: " B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: " C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: " D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: " E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: " F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: " G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: " H",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: " J",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "K",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "L",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "M",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
// ];

export default function ChartTransaction(props) {
  //   const { transaction } = useBudgets();
  //   console.log(
  //     transaction
  //       .filter((item) => new Date(item.date).getMonth() === 0)
  //       .filter((item) =>
  //         props.incExp ? item.name === "income" : item.name === "expense"
  //       )
  //   );
  //   const [data, setData] = useState([
  //     {
  //       name: "Jan",
  //       total: transaction
  //         .filter((item) => new Date(item.date).getMonth() === 0)
  //         .filter((item) =>
  //           props.incExp ? item.name === "income" : item.name === "expense"
  //         )
  //         .map((item) => item.amount)
  //         .reduce(
  //           (preValue, curValue) => parseInt(preValue) + parseInt(curValue),
  //           0
  //         ),
  //     },
  //     {
  //       name: "Feb",
  //       total: transaction
  //         .filter((item) => new Date(item.date).getMonth() === 1)
  //         .filter((item) =>
  //           props.incExp ? item.name === "income" : item.name === "expense"
  //         )
  //         .map((item) => item.amount)
  //         .reduce(
  //           (preValue, curValue) => parseInt(preValue) + parseInt(curValue),
  //           0
  //         ),
  //     },
  //     { name: "Mar", total: "" },
  //     { name: "Apr", total: "" },
  //     { name: "May", total: "" },
  //     { name: "Jun", total: "" },
  //     { name: "Jul", total: "" },
  //     { name: "Aug", total: "" },
  //     { name: "Sep", total: "" },
  //     { name: "Oct", total: "" },
  //     { name: "Nov", total: "" },
  //     { name: "Dec", total: "" },
  //   ]);
  return (
    // <LineChart
    //   sx={{ position: "relative" }}
    //   width={450}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   {/* <CartesianGrid strokeDasharray="3 3" /> */}
    //   <XAxis dataKey="name" axisLine={false} tickLine={false} />

    //   <Tooltip />

    //   <Line
    //     type="monotone"
    //     dataKey="pv"
    //     stroke="#8884d8"
    //     activeDot={{ r: 8 }}
    //     dot={false}
    //   />
    //   <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
    // </LineChart>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={props.dataChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" axisLine={false} tickLine={false} />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke={props.incExp ? "#438883" : "#F95B51"}
          fill={
            props.incExp ? "rgba(67, 136, 131, .2)" : "rgba(233, 73, 63,.2)"
          }
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
