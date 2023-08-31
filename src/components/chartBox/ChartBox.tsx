//import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Tooltip } from "recharts";
import { stateCountArray, countTotal } from '../../data';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
  stateCountArray: object[];

};

 const ChartBox = (props: Props) => {

  
   return (
      <div className="stateCount">
        <h1 className="title">{props.title}</h1>
        <span className="grandTotal">Total Outages = {countTotal}</span>
        <div className="radarChart">
      <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={stateCountArray}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="state" />
      <PolarRadiusAxis />
      <Radar
        name="Outages"
        dataKey="count"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Tooltip
      contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
      labelStyle={{ display: "none" }}
      cursor={{fill:"none"}}
      />
    </RadarChart>
        </div>
       
      </div>
   );
 };

export default ChartBox;



