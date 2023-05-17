import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Claims Monthly Relations',
    },
  },
};

const DeathChart = () => {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Claims',
            data: [15,24,12,54,24,27,32,14,43,35,26,42],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(25, 25, 186, 0.2)',
                'rgba(175, 92, 92, 0.2)',
                'rgba(234, 62, 35, 0.2)',
                'rgba(153, 82, 35, 0.2)',
                'rgba(54, 23, 177, 0.2)'
              ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgba(201, 203, 207)',
                'rgba(25, 25, 186)',
                'rgba(175, 92, 92)',
                'rgba(234, 62, 35)',
                'rgba(153, 82, 35)',
                'rgba(54, 23, 177)'
              ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='w-[32rem] bg-white rounded-md p-4 shadow mx-4 mt-4'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default DeathChart
