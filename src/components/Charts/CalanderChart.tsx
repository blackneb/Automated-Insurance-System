import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Monthly Actions of The System',
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
      borderWidth: 1,
    },
  ],
};

export function CalanderChart() {
  return(
    <div className='w-96 bg-white rounded-md p-4 shadow-lg mx-4 mt-4'>
      <p>Monthly Actions</p>
      <PolarArea data={data} />
    </div>
  ) ;
}