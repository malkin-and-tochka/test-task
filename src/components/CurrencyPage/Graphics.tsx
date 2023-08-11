import React, {useEffect, useState} from 'react';
import {ChartData, ChartOptions} from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {getCoinHistory} from "../../api/api";
import {CurrentCoinType} from "../../Context/ContextTypes";

type GraphicsType = {
    coin: CurrentCoinType
}

const Graphics: React.FC<GraphicsType> = ({coin}) => {
    const [data, setData] = useState<ChartData<'line'>>()
    const [options, setOptions] = useState<ChartOptions<'line'>>({
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    })
    useEffect(() => {
        async function fetchData() {
            try {
                getCoinHistory(coin.id)
                    .then(response => {
                        setData({
                            labels: response.map((el: any) => {
                                const time = new Date(el.date)
                                return time.toLocaleString()
                            }),
                            datasets: [
                                {
                                    label: 'Dataset 1',
                                    data: response.map((el: { priceUsd: any; }) => el.priceUsd),
                                    borderColor: 'rgb(255, 99, 132)',
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                }
                            ],
                        })
                    })
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    return (
        <div>
            {data ? <Line data={data} options={options}/> : null}
        </div>
    );
};

export default Graphics;