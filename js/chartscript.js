				
/*Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});*/

var ctx = document.getElementById("container");
if (ctx) {
  ctx.height = 400;
  var myChart = new Chart(ctx, {
    type: 'bar',
    defaultFontFamily: 'Poppins',
    data: {
      labels: ['20 ans et -', '20 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44', '45 - 49', '50 - 54', '55 - 59', '60 - 64', '65 ans et +'],
      //labels: ['20 ans et -', '20 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44'],
      datasets: [
        {
          label: "Votre entreprise",
          data: [3.1, 3.2, 3.7, 4.2, 3.9, 4.3, 4.3, 4.5, 4.8, 5.8, 6.5],
          //data: [3.1, 3.2, 3.7, 4.2, 3.9, 4.3],
          borderColor: "rgba(0, 123, 255, 0.9)",
          borderWidth: "0",
          backgroundColor: "rgba(0, 123, 255, 0.5)",
          fontFamily: "Poppins"
        },
        {
          label: "Secteur",
          data: [3.1, 3.2, 3.5, 3.9, 3.8, 3.8, 3.9, 4.0, 4.2, 4.3, 4.3],
          //data: [3.1, 3.2, 3.7, 4.2, 3.9, 4.3],
          borderColor: "rgba(0,0,0,0.09)",
          borderWidth: "0",
          backgroundColor: "rgba(0,0,0,0.07)",
          fontFamily: "Poppins"
        }
      ]
    },
    options: {
      legend: {
        position: 'top',
        labels: {
          fontFamily: 'Poppins'
        }

      },
      scales: {
        xAxes: [{
          ticks: {
            fontFamily: "Poppins"

          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontFamily: "Poppins"
          }
        }]
      }
    }
  });
}