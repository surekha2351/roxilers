/* eslint-disable react/prop-types */

import { Chart } from "react-google-charts";

export const PieChart = ({ pieData, month }) => {
    console.log(pieData);

    const data = [
        ["Category", "Items"],
    ];
    for (let key in pieData?.total) {
        data.push([key, pieData?.total[key]]);
    }

    const options = {
        title: `Pie Chart - ${month}`,
        is3D: true,
        backgroundColor: '#f0f0f0', // Set background color
        colors: ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'], // Set slice colors
        legend: { textStyle: { color: '#333' } } // Set legend text color
    };

    return (
        <div className="w-[60%] m-auto mt-[3rem] p-[2rem] bg-blue-100">
            <span className="text-3xl text-black font-bold">Pie Chart - {month}</span>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default PieChart;
