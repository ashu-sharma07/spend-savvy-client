import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";




const PieChart = (props) => {
    const income = JSON.parse(localStorage.getItem("income"))
    const expense = JSON.parse(localStorage.getItem("expense"))
    // const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels: [],

        datasets: [
            {
                // label: "Percentage Score",
                barThickness: 10,
                backgroundColor: ['#4641A7','#F9CE68'],
                // borderRadius: 10,
                borderColor: ['white'],
                data: [income,expense],
            },
        ],
    };
    return (
        <div style={{ width: 300, marginTop: 20, padding: 40,position:'relative' }}>
            <Doughnut data={data} />
            {/* <div style={{position:'absolute',top:160,left:130,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <p>Overall Spending</p>
                <p>$120.32</p>
            </div> */}
            <div className="chartDiv">
                <p style={{color:'#4641A7'}}>Total Income: ₹ {income}</p>
                <p style={{color:'#F9CE68'}}>Total Expense: ₹ {expense}</p>
            </div>
        </div>
    );
};

export default PieChart;