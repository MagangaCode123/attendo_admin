import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const Piechart = () => {
    const options = {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Staff Attendance Overview',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
        plotOptions: {
          pie: {
            innerSize: '75%',
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.0f}%',
              style: {
                fontSize: '0.9em ',
                display: 'grid',
              },
            },
            showInLegend: true,
          },
        },
        series: [
          {
            name: 'Attendance',
            colorByPoint: true,
            data: [
              { name: 'In Office', y: 63 },
              { name: 'Half Day', y: 6 },
              { name: 'Working from Home', y: 22 },
              { name: 'On Leave', y: 9 },
            ],
          },
        ],
      };
    return (
        <div id="container" style={{ width: '100%', height: '200px' }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
}

export default Piechart
