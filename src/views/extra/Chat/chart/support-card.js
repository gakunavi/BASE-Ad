const chartData = {
  type: 'area',
  height: 115,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Ticket '
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
    }
  ]
};
export default chartData;
