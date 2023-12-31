const chartData = {
  height: 200,
  type: 'line',
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
    },
    colors: ['#73b4ff', '#59e0c5', '#ff869a'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    markers: {
      size: 5,
      colors: ['#4099ff', '#2ed8b6', '#ff5370'],
      opacity: 0.9,
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: 10,
      max: 70
    }
  },
  series: [
    {
      name: 'Arts',
      data: [20, 50, 30, 60, 30, 50, 40]
    },
    {
      name: 'Commerce',
      data: [60, 30, 65, 45, 67, 35, 68]
    },
    {
      name: 'Science',
      data: [40, 20, 50, 15, 40, 65, 20]
    }
  ]
};
export default chartData;
