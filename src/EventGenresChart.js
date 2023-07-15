import { useState, useEffect } from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer
  } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
      }, [`${events}`]);

    const getData = () => {
        let tempData = genres.map(genre => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            //console.log(filteredEvents);
            return {
                name: genre,
                value: filteredEvents.length
            }
        })
        //console.log(tempData);
        return tempData
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
      const RADIAN = Math.PI / 180;
      const radius = outerRadius;
      const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
      const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
      return percent ? (
        <text
          x={x}
          y={y}
          fill="#8884d8"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
        </text>
      ) : null;
    };
/** 
    const testdata = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
    */
    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130}           
            />
          </PieChart>
        </ResponsiveContainer>
      );
     

}
export default EventGenresChart;