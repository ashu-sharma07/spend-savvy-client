import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import api from "../api/api";




const BarChart = (props) => {
    const [work, setWork] = useState(0);
    const [food, setFood] = useState(0);
    const token = JSON.parse(localStorage.getItem("token"));
    const [transport, setTransport] = useState(0);
    const [rentals, setRentals] = useState(0);
    const [pocketMoney, setPocketMoney] = useState(0);
    const [internet, setInternet] = useState(0);
    const [freelance, setFreelance] = useState(0);
    const [other, setOther] = useState(0);

    const fetchData = async () => {
        try {
            const res = await api.get('transaction/graph/Work',{ headers: { token: token } });
            // console.log(res)
            setWork(res.data.result);
        } catch (error) {
            console.log(error);
        }

        try {
            const res1 = await api.get('transaction/graph/Food',{ headers: { token: token } });
            setFood(res1.data.result);
            
        } catch (error) {
            console.log(error);
        }
        const res2 = await api.get('transaction/graph/Internet',{ headers: { token: token } });
        setInternet(res2.data.result);
        const res3 = await api.get('transaction/graph/Transport',{ headers: { token: token } });
        setTransport(res3.data.result);
        const res4 = await api.get('transaction/graph/Rentals',{ headers: { token: token } });
        setRentals(res4.data.result);
        const res5 = await api.get('transaction/graph/PocketMoney',{ headers: { token: token } });
        setPocketMoney(res5.data.result);
        const res6 = await api.get('transaction/graph/Freelance',{ headers: { token: token } });
        setFreelance(res6.data.result);
        const res7 = await api.get('transaction/graph/Other',{ headers: { token: token } });
        setOther(res7.data.result);
        console.log(food,work)
    }
    useEffect(() => {
        fetchData();
    }, [])

    const labels = ['food','internet','work','transport','rentals','pocketMoney','freelance','other'];
    const data = {
        labels: labels,

        datasets: [
            {
                // label: "Percentage Score",
                barThickness: 10,
                backgroundColor: ['#4641A7'],
                borderRadius: 10,
                borderColor: ["#4641A7"],
                data: [food, internet, work,transport,rentals,pocketMoney,freelance,other],
            },
        ],
    };
    return (
        <div style={{ width: 600, backgroundColor: 'white', marginTop: 20, padding: 40 }}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;