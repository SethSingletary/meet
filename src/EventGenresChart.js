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

    const data01 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
      { name: 'Group E', value: 278 },
      { name: 'Group F', value: 189 },
    ];

    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label
              outerRadius={130}           
            />
          </PieChart>
        </ResponsiveContainer>
      );
     

}
export default EventGenresChart;