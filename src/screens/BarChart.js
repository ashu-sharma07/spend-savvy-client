import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";




const BarChart = (props) => {
    const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const data = {
        labels: labels,
        
        datasets: [
            {
                // label: "Percentage Score",
                barThickness:10,
                backgroundColor: ['#4641A7'],
                borderRadius:10,
                borderColor: ["#4641A7"],
                data: [20,30,40,50,60,50,40,30,40,50,20,50,100],
            },
        ],
    };
    return (
        <div style={{ width: 400, padding: 5,backgroundColor:'white',marginTop:20,padding:40 }}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;