import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Bargraph = () => {
  // Profile image URLs (replace with your actual image paths)
  const profileImages = [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Employee Attendance estimate',
    },
    xAxis: {
      categories: ['James', 'Jane', 'Alex', 'Peter', 'Abel', 'Alice'],
      crosshair: false,
      labels: {
        useHTML: true,
        formatter: function() {
          // Return HTML with image for each label
          return `<div style="text-align: center;">
                    <img src="${profileImages[this.pos]}" 
                         style="width: 30px; height: 30px; border-radius: 15px; object-fit: cover;"
                         alt="${this.value}"/>
                    <div style="margin-top: 5px;">${this.value}</div>
                  </div>`;
        }
      },
      accessibility: {
        description: 'Countries',
      },
      
    },
    yAxis: {
      
      title: {
        text: '',
      },
      labels: {
        enabled: false, // Disable y-axis labels
      },
    },
    tooltip: {
      valueSuffix: ' ',
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