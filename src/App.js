import React from 'react';
import Widget from './components/Widget';
import './App.css';

const sites = [
  { id: 1122, label: "Cadillac Asphault - Belleville" },
  { id: 1058, label: "Lehigh Hanson - Clinton Agg" },
  { id: 878, label: "Lehigh Hanson - Savanah Agg" },
  { id: 1562, label: "Miles Resources - Lakeview" },
  { id: 1446, label: "MMM - New Caney" },
  { id: 1833, label: "RE Janes - Slanton" }
];

const timeframes = [
  'today',
  'past week',
  'past month',
  'past quarter',
  'past 6 months',
  'past year',
  'since start'
];

const alertTypes = [
  'no ticket',
  'weight difference',
  'valve timeout',
  'overweight'
]

const App = () => {

  const testData1 = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [["Belleville", 0 ], ["Clinton", 20], ["Savanah", 60], ['Lakeview', 43], ['New Caney', 19], ['Slanton', 38]]
      },
    ],
    []
  )

  const testData2 = React.useMemo(
    () => [
      // {
      //   label: 'Series 1',
      //   data: [["Belleville", 0 ]]
      // },
      // {
      //   label: 'Series 1',
      //   data: [["Clinton", 20]]
      // },
      // {
      //   label: 'Series 1',
      //   data: [["Savanah", 60]]
      // },
      // {
      //   label: 'Series 1',
      //   data: ['Lakeview', 43]]
      // },
      {
        label: 'Series 1',
        data: [["Belleville", 0 ], ["Clinton", 5], ["Savanah", 3], ['Lakeview', 7], ['New Caney', 2], ['Slanton', 10]]
      },
    ],
    []
  )

  const testData3 = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [["No Ticket", 4 ], ["Overweight", 0], ["ValveTimeout", 0], ['Weight Difference', 40]]
      },
       {
        label: 'Series 1',
        data: [["No Ticket", 0 ], ["Overweight", 8], ["ValveTimeout", 60], ['Weight Difference', 0]]
      },
       {
        label: 'Series 1',
        data: [["No Ticket", 2 ], ["Overweight", 2], ["ValveTimeout", 20], ['Weight Difference', 0]]
      },
       {
        label: 'Series 1',
        data: [["No Ticket", 0 ], ["Overweight", 0], ["ValveTimeout", 0], ['Weight Difference', 3]]
      },
    ],
    []
  )

  const testData4 = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [['', 0],['HC695540 sunset', 2], ['HCRR032 rock&roll', 4], ['HCJAM701 Jams Trucking', 5], ['121CB2 121cb2', 8], ['1547 ray walker', 10]]
      },
    ],
    []
  )
  
  const testTruckArr = [
  'HC695540 sunset',
  'HCJAM701 Jams Trucking',
  'HCRR032 rock&roll',
  '121CB2 121cb2',
  '1547 ray walker'
];



    const series = React.useMemo(
      () => ({
          type: 'bar'
      }),
      []
    )

  return (
    <div  style={{ paddingTop: 20 }}>
      <h1 style={{ textAlign: 'center', margin: 0, marginBottom: 20 }}>Reporting</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 100, paddingBottom: 20 , marginTop: -40 }}>
        <p style={{ fontSize: '1.4vmin', margin: 0, padding: 5, border: '2px solid grey', borderRadius: 5 }} className="cursor-pointer" onClick={() => alert('add widget. show configuration form.')}> + widget</p>
      </div>
      <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            width: '100%', 
            paddingBottom: '2%' }}>


        <Widget type={'line'} data={testData1} label={'tickets totals'} description="ticket totals per site" />
        <Widget type={'bar'} data={testData2} series={series} label={'avg. in facility'} description="average truck in facility times" />
        <Widget type={'bar'} data={testData3} series={series} label={'alerts'} alerts={'hello'} description="alerts by type per site" />
        <Widget type={'bar'} data={testData4} series={series} label={'facility visits'} trucks={testTruckArr} description="greatest number of truck trips per site" />

      </div>
    </div>
  );
}

export default App;
