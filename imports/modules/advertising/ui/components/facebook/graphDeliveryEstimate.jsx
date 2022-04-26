import React from 'react';

var ReactHighcharts = require('react-highcharts');

var obj_temp = {
  'bid_estimate': {
    'min_bid': 151,
    'median_bid': 246,
    'max_bid': 405
  },
  'daily_outcomes_curve': [
    {
      'spend': 0,
      'reach': 0,
      'impressions': 0,
      'actions': 0
    },
    {
      'spend': 157,
      'reach': 32768.790689652,
      'impressions': 90945.104519826,
      'actions': 90945.104519826
    },
    {
      'spend': 239,
      'reach': 35937.659450005,
      'impressions': 126453.01012466,
      'actions': 126453.01012466
    },
    {
      'spend': 495,
      'reach': 52682.097382142,
      'impressions': 178817.36771853,
      'actions': 178817.36771853
    },
    {
      'spend': 784,
      'reach': 73824.119000859,
      'impressions': 238181.16718764,
      'actions': 238181.16718764
    },
    {
      'spend': 995,
      'reach': 84896.098416472,
      'impressions': 284913.48513599,
      'actions': 284913.48513599
    },
    {
      'spend': 1409,
      'reach': 105021.37936511,
      'impressions': 383516.13591691,
      'actions': 383516.13591691
    },
    {
      'spend': 2192,
      'reach': 144187.27289666,
      'impressions': 554449.16517466,
      'actions': 554449.16517466
    },
    {
      'spend': 3405,
      'reach': 200028.06633647,
      'impressions': 768886.60456829,
      'actions': 768886.60456829
    },
    {
      'spend': 5176,
      'reach': 286474.30812977,
      'impressions': 1122025.2215611,
      'actions': 1122025.2215611
    },
    {
      'spend': 7717,
      'reach': 368454.07803667,
      'impressions': 1516043.0016692,
      'actions': 1516043.0016692
    },
    {
      'spend': 11040,
      'reach': 467821.2438251,
      'impressions': 2017614.56879,
      'actions': 2017614.56879
    },
    {
      'spend': 14487,
      'reach': 583791.79690754,
      'impressions': 2609299.3390383,
      'actions': 2609299.3390383
    },
    {
      'spend': 18446,
      'reach': 661882.34285374,
      'impressions': 3004897.2742216,
      'actions': 3004897.2742216
    },
    {
      'spend': 23479,
      'reach': 776076.42806776,
      'impressions': 3983339.4778286,
      'actions': 3983339.4778286
    },
    {
      'spend': 30079,
      'reach': 883449.95409317,
      'impressions': 4477834.7148298,
      'actions': 4477834.7148298
    },
    {
      'spend': 37823,
      'reach': 1002781.7668052,
      'impressions': 5131066.6021078,
      'actions': 5131066.6021078
    },
    {
      'spend': 48495,
      'reach': 1133664.4774062,
      'impressions': 5662779.6833636,
      'actions': 5662779.6833636
    },
    {
      'spend': 60534,
      'reach': 1208447.0207231,
      'impressions': 5920593.0757812,
      'actions': 5920593.0757812
    },
    {
      'spend': 75941,
      'reach': 1284687.2684552,
      'impressions': 6216435.5646049,
      'actions': 6216435.5646049
    },
    {
      'spend': 156616,
      'reach': 1399606.3670815,
      'impressions': 6412678.9102636,
      'actions': 6412678.9102636
    },
    {
      'spend': 204992,
      'reach': 1461347.1730711,
      'impressions': 6499518.6337065,
      'actions': 6499518.6337065
    },
    {
      'spend': 269435,
      'reach': 1482247.2063049,
      'impressions': 6520418.6669404,
      'actions': 6520418.6669404
    },
    {
      'spend': 334335,
      'reach': 1498351.186485,
      'impressions': 6536522.6471204,
      'actions': 6536522.6471204
    },
    {
      'spend': 410542,
      'reach': 1498351.186485,
      'impressions': 6536522.6471204,
      'actions': 6536522.6471204
    },
    {
      'spend': 498228,
      'reach': 1498351.186485,
      'impressions': 6536522.6471204,
      'actions': 6536522.6471204
    },
    {
      'spend': 612353,
      'reach': 1535875.812723,
      'impressions': 6574047.2733585,
      'actions': 6574047.2733585
    },
    {
      'spend': 766058,
      'reach': 1592329.3354134,
      'impressions': 6630500.7960488,
      'actions': 6630500.7960488
    },
    {
      'spend': 973432,
      'reach': 1792212.5549158,
      'impressions': 6830384.0155512,
      'actions': 6830384.0155512
    },
    {
      'spend': 1260897,
      'reach': 1914720.6939837,
      'impressions': 6952892.1546192,
      'actions': 6952892.1546192
    },
    {
      'spend': 1666916,
      'reach': 1988511.195193,
      'impressions': 7026682.6558284,
      'actions': 7026682.6558284
    },
    {
      'spend': 2249884,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 3091819,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 4344956,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 6191541,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 8912627,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 12904828,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 18740296,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 27331326,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 39190583,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 55862016,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    },
    {
      'spend': 57198499,
      'reach': 2009881.9619087,
      'impressions': 7048053.4225441,
      'actions': 7048053.4225441
    }
  ],
  'estimate_dau': 568166399,
  'estimate_mau': 1096000000,
  'estimate_ready': true
};

class FacebookGraphDelivery extends React.Component {
  constructor() {
    super();

    this.state = {
      reach: [],
      spend: []
    };
  }

  componentDidMount() {
    let { data } = this.props;
    this.setState({
      reach: this.state.reach.concat(obj_temp.daily_outcomes_curve.map(obj => parseFloat(obj.reach.toFixed(2)))),
      spend: this.state.spend.concat(obj_temp.daily_outcomes_curve.map(obj => obj.spend))
    });
  }

  render() {
    console.log('state', this.state);
    var config = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Delivery Estimate'
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
      },
      xAxis: {
        categories: [...this.state.spend],
        plotBands: [{
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
        }]
      },
      yAxis: {
        title: {
          text: 'Spend'
        }
      },
      tooltip: {
        shared: true,
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [
        {
          name: 'Reach',
          data: [...this.state.reach]
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

export default FacebookGraphDelivery;
