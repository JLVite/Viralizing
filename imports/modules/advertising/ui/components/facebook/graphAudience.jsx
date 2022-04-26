import React from 'react';

var ReactHighcharts = require('react-highcharts');
var HighchartsMore = require('highcharts-more');
var SolidGauge = require('highcharts-solid-gauge');
HighchartsMore(ReactHighcharts.Highcharts);
SolidGauge(ReactHighcharts.Highcharts);

class FacebookGraphAudience extends React.Component {

  render() {
    let { data } = this.props;
    if (!data || !data.users) return;
    const percent = (data.users * 65) / 100000000;

    var config = {
      chart: {
        type: 'solidgauge'
      },
      title: null,
      pane: {
        center: ['50%', '50%'],
        size: '50%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      // the value axis
      yAxis: {
        stops: [
          [0.3, 'red'], // green
          [0.6, 'yellow'], // yellow
          [0.9, 'green'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        title: {
          text: `Audience ${data.users.toLocaleString()}`,
          y: 70
        },
        labels: {
          y: 16
        },
        min: 0,
        max: 100
      },
      plotOptions: {
        series: {
          animation: {
            duration: 3000
          }
        },
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        dataLabels: { enabled: false },
        data: [percent],
      }]
    };

    return (
      <div style={{
        width: '100%',
        height: '200px',
      }}>
        <ReactHighcharts config={config}></ReactHighcharts>

      </div>
    );
  }
}

export default FacebookGraphAudience;
