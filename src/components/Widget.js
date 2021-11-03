import React, {useState} from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import '../App.css';
const sites = [
  { id: 1122, label: "Cadillac Asphault - Belleville" },
  { id: 1058, label: "Lehigh Hanson - Clinton Agg" },
  { id: 878, label: "Lehigh Hanson - Savanah Agg" },
  { id: 1562, label: "Miles Resources - Lakeview" },
  { id: 1446, label: "MMM - New Caney" },
  { id: 1833, label: "RE Janes - Slanton" }
];

const sTimeframes = [
  'today',
  'past week',
  'past month',
  'past quarter',
  'past 6 months',
  'past year',
  'since start'
];

const Widget = (props) => {

    const [site,setSite] = useState(1);
    const [timeframe,setTimeframe] = useState('today');

    return (
        <div style={{ marginBottom: 14, marginLeft: 8, marginRight: 8 }}>
            <div style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 

                    width: 'auto' }}>
                <p className="cursor-pointer" 
                   onClick={() => alert('edit widget name.')}
                   style={{ 
                       margin: 0, 
                       fontSize: 10, 
                       padding: '1%', 
                       borderTopRightRadius: 3, 
                       borderTopLeftRadius: 3, 
                       backgroundColor: 'rgba(0, 27, 45, 0.9)',
                       color: 'white',
                       fontWeight: 'bold',
                       paddingRight: 10, 
                       paddingLeft: 10 }}>
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

            <div style={{ paddingBottom: 5, paddingTop: 5, width: '100%', backgroundColor: 'rgba(0, 27, 45, 0.9)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'spece-between' }}>
               <p style={{ margin: 0, marginLeft: 5, marginRight: 5, fontSize: 10, color: 'white' }}>site:</p>
                <select 
                    style={{ fontSize :10, width: '40%' }}
                    onChange={e => setSite(e.target.value)} 
                    value={site}>
                    <option value={1}>all</option>
                    {sites.map(site => (
                        <option value={site.id} key={site.id}>{site.label}</option>
                    ))}
                </select>
                <div style={{ width: '10%' }}></div>
                 <select 
                    style={{ fontSize: 10, width: '30%',}}
                    onChange={e => setTimeframe(e.target.value)} 
                    value={timeframe}>
                    {sTimeframes.map(t => (
                        <option value={t} key={t}>{t}</option>
                    ))}
                </select>
            </div>

            <p style={{ width: '100%', textAlign: 'center', fontSize: 10, backgroundColor: 'rgba(0, 27, 45, 0.9)', margin: 0, color: 'white', paddingBottom: 3 }}>
                {props.description}
            </p>

            { props.alerts ?
                <div style={{ backgroundColor: 'rgba(0, 27, 45, 0.9)', display: 'flex', flexDirection: 'row', alignItems: 'center', jusitfyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', jusifyContent: 'center', marginRight: 10, marginLeft: 10 }}>
                        <div style={{ backgroundColor: "coral", height: 8, width: 8, marginRight: 5 }}></div>
                        <p style={{ fontSize: 10, margin: 0, textAlign: 'center', color: 'white' }}>Belleville</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', jusifyContent: 'center', marginRight: 10, marginLeft: 5 }}>
                        <div style={{ backgroundColor: "yellow", height: 8, width: 8, marginRight: 5 }}></div>
                        <p style={{ fontSize: 10, margin: 0, textAlign: 'center', color: 'white' }}>Clinton</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', jusifyContent: 'center', marginRight: 10, marginLeft: 5 }}>
                        <div style={{ backgroundColor: "#6fb8ff", height: 8, width: 8, marginRight: 5 }}></div>
                        <p style={{ fontSize: 10, margin: 0, textAlign: 'center', color: 'white' }}>Savanah</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', jusifyContent: 'center', marginLeft: 5 }}>
                        <div style={{ backgroundColor: "lightgreen", height: 8, width: 8, marginRight: 5 }}></div>
                        <p style={{ fontSize: 10, margin: 0, textAlign: 'center', color: 'white' }}>Lakeview</p>
                    </div>
                </div>  :
                <p style={{ backgroundColor: 'rgba(0, 27, 45, 0.9)', fontSize: 10, margin: 0, textAlign: 'center', color: props.trucks ? 'white' : 'transparent' }}>Top 5 trucks</p> 
            }

            {   props.type === 'line' ?
                    <LineChart data={props.data} sites={sites} /> :
                props.type === 'bar' ?
                    <BarChart data={props.data} series={props.series} trucks={props.trucks ? props.trucks : null} /> :
                props.type === 'pie' ?
                    <PieChart data={props.data} /> :
                    <p>No chart type supplied. Cannot render chart.</p>
            }
        </div>
    )
}

export default Widget;