import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const ChartVehicleBrand = ({unique,occurence}:any) => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const bgcolors= unique.map( (item:any) => getRandomColor() );

    const data = {
        labels: unique,
        datasets: [
          {
            label: '# of Votes',
            data: occurence,
            backgroundColor: bgcolors,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='w-96 p-4 shadow-lg mx-4'>
      <p>Vehicle Brands</p>
      <Pie data={data} />
    </div>
  )
}

export default ChartVehicleBrand
