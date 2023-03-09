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
      text: 'Insurance Type Relations',
    },
  },
};
const ChartUsersStatus = () => {

const data = {
  labels: ['Vehicle', 'Property', 'life'],
  datasets: [{
    label: 'Relations',
    data: [150,85,32],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 1
  }]
};
  return (
    <div className='w-[32rem] bg-white rounded-md p-4 shadow mx-4 mt-4'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default ChartUsersStatus
