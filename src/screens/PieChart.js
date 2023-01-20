import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";




const PieChart = (props) => {
    // const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels: [],

        datasets: [
            {
                // label: "Percentage Score",
                barThickness: 10,
                backgroundColor: ['#4641A7', '#EBB32E', '#F9CE68', '#DAEFF8', '#7C5CFC', '#5CAFFC', '#A1A9FE'],
                // borderRadius: 10,
                borderColor: ['white'],
                data: [20, 30, 40, 50, 60, 50],
            },
        ],
    };
    return (
        <div style={{ width: 300, marginTop: 20, padding: 40 }}>
            <Doughnut data={data} />
            <div>
                <p>Ocverall Spending</p>
                <p>$120.32</p>
            </div>
        </div>
    );
};

export default PieChart;