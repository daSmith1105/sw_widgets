import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import '../App.css';

const Widget = (props) => {

    return (
        <div style={{ marginBottom: 14, marginLeft: 8, marginRight: 8, width: 'auto', height: 'auto'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5%', width: 'auto' }}>
                <p className="cursor-pointer" 
                   onClick={() => alert('edit widget name.')}
                   style={{ 
                       margin: 0, 
                       fontSize: 10, 
                       padding: '1%', 
                       borderTopRightRadius: 3, 
                       borderTopLeftRadius: 3, 
                       backgroundColor: "rgba(0,0,0,0.2)",
                       paddingRight: 5, 
                       paddingLeft: 5 }}>
                    {props.label}
                </p>
                <p className="cursor-pointer" 
                   onClick={() => alert('remove widget.')}
                   style={{ 
                       margin: 0, 
                       fontSize: 10, 
                       padding: '1%', 
                       borderTopRightRadius: 3, 
                       borderTopLeftRadius: 3, 
                       backgroundColor: "rgba(0,0,0,0.2)",
                       paddingRight: 5, 
                       paddingLeft: 5 }}>
                    remove
                </p>
            </div>
            {   props.type === 'line' ?
                    <LineChart data={props.data} /> :
                props.type === 'bar' ?
                    <BarChart data={props.data} series={props.series} /> :
                props.type === 'pie' ?
                    <PieChart data={props.data} /> :
                    <p>No chart type supplied. Cannot render chart.</p>
            }
        </div>
    )
}

export default Widget;