import React from 'react'
import { Chart } from 'react-charts';
import Box from './Box';
 
const LineChart = (props) => {
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
    return (
        <Box style={{
                background: 'rgba(0, 27, 45, 0.9)',
                padding: '.3rem',
                borderRadius: '5px' }} >
            <div style={{ height: '90%', width: '95%', paddingLeft: '1.5%' }}>
                <Chart data={props.data} axes={axes} dark />
            </div>
        </Box>
    )
}

export default LineChart;