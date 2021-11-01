import React from 'react';
import Widget from './components/Widget';
import './App.css';

const App = () => {

  const testData1 = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const testData2 = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
    //   {
    //     label: 'Series 2',
    //     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //   }
    ],
    []
  )

  // const { data, randomizeData } = useChartConfig({
    //     series: 10,
    //     dataType: 'ordinal'
    //   })
    // const series = React.useMemo(
    // () => ({
    //     type: 'bar'
    // }),
    // []
    // )

    const series = React.useMemo(
    () => ({
        type: 'bar'
    }),
    []
    )

  return (
    <div  style={{ paddingTop: 20 }}>
      <h1 style={{ textAlign: 'center', margin: 0, marginBottom: 20 }}>Reporting</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 100, paddingBottom: 20 }}>
        <p style={{ fontSize: '1.4vmin', margin: 0, padding: 5, border: '2px solid grey', borderRadius: 5 }} className="cursor-pointer" onClick={() => alert('clicked')}> + widget</p>
      </div>
      <div style={{ 
            height: 'auto', 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            width: '100%', 
            paddingBottom: '2%' }}>
        <Widget type={'line'} data={testData1} label={'line graph 1'} />
        <Widget type={'bar'} data={testData1} series={series} label={'bar graph 1'} />
        <Widget type={'pie'} data={testData1} label={'pie chart 1'} />
        <Widget type={'line'} data={testData1} label={'line graph 2'} />
      </div>
    </div>
  );
}

export default App;
