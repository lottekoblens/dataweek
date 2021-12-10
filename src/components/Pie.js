import '../App.css';
import { getData } from '../providers/fetch.js';
import { useEffect, useState } from 'react';
import PieChart from './PieHooks'



const DataOverview = () => {
  const [json, setJson] = useState(null); // when json is created it is null and when setJson is called then json is filled with the data
 

  useEffect(() => {
    getData().then(data => {
      setJson(data) // when data is fetched, then give data to setJson
      console.log(data)
    })
  }, [])


  return (
    <>
      <div>
        <div className="hidden" id="tooltip">
          <p id="name"></p>
          <p><span id="value"> </span></p>
        </div>
        {json && <PieChart data={json} />}
        {/* give PieChart filtered, so that this data can be used in the pie chart */}
      </div>
    </>
  );
};

export default DataOverview;

