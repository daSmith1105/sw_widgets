import React from 'react'
import { Chart } from 'react-charts';
import Box from './Box';
 
const BarChart = (props) => {

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
 
    const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { position: 'left', type: 'linear', stacked: true }
        ],
        []
    )
 
    return (
        <Box style={{
                background: 'rgba(0, 27, 45, 0.9)',
                padding: '.3rem',
                borderRadius: '5px' }} >
            <div style={{ height: '90%', width: '90%'}}>
                <Chart data={props.data} series={props.series} axes={axes} dark stacked/>
            </div>
        </Box>
    )
}

export default BarChart;