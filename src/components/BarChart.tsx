import React from 'react'
import { Bar } from "react-chartjs-2"

export default function BarChart(){
    return (
        <div className="chart-container">
            <Bar
                data={{
                    labels: ["January", "February", "March", "April"],
                    datasets: [
                    {
                        label: "Sales",
                        backgroundColor: 'rgba(0,0,255,0.4)',
                        data: [0, 100, 200, 300, 400, 500, 600]
                    },
                ]
                }}
                options={{
                    maintainAspectRatios: false,
                    responsive: true,
                    title: {
                        display: true,
                        text: "Sales By Month for:"
                    },
                    legend: {
                        display: false
                    }
                }}
            />
        </div>
    )
}

