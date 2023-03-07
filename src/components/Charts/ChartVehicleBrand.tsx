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
            borderColor: bgcolors,
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='w-96 bg-white rounded-md p-4 shadow-lg mx-4'>
      <p>Vehicle Brands</p>
      <Doughnut data={data} />
    </div>
  )
}

export default ChartVehicleBrand
