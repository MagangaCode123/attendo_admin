import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Bargraph = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Employee Attendance estimate',
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 Metric Tons (MT)',
      },
    },
    tooltip: {
      valueSuffix: ' (1000 MT)',
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Last week',
        data: [387749, 280000, 129000, 64300, 54000, 34300],
      },
      {
        name: 'This week',
        data: [45321, 140000, 10000, 140500, 19500, 113500],
      },
    ],
  };

  return (
    <div id="container" style={{ width: '100%', height: '400px' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Bargraph;