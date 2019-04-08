import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class BigDoughnut extends React.Component {

    // const data = {
    //     labels: [
    //         'Red',
    //         'Green',
    //         'Yellow'
    //     ],
    //     datasets: [{
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ],
    //         hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ]
    //     }]
    // };

// export default React.createClass({
//   displayName: 'DoughnutExample',

  render() {
      const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    );
  };
};
// });

export default BigDoughnut;