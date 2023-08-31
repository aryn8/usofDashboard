import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./categoryCharChartBox.scss";

type Props = {
  title: string;
  color: string;
  grandTotal: number | string,
  categoryData: object[];
};

const CategoryBarChart = (props: Props) => {

  return (
    <div className="categoryBarChart">
      <h1>{props.title}</h1>
      <span className="grandTotal">Grand Total = {props.grandTotal}</span>
      <div className="chart">

        <ResponsiveContainer width="80%" aspect={3}>
          <BarChart data={props.categoryData} width={400} height={400}>
            <XAxis dataKey= "category"/>
            <YAxis />
            <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{fill:"none"}}
            />
            <Bar dataKey="totalTime" fill= {props.color}/>
            
          </BarChart>
        </ResponsiveContainer> 
      </div>
    </div>
  );
};

export default CategoryBarChart;
