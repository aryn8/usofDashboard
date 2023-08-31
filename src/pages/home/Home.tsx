import BarChartBox from "../../components/BarChartBox/BarChartBox";
import CategoryBarChart from "../../components/categoryBarChart/categoryBarChart";
import ChartBox from "../../components/chartBox/ChartBox";
import ComplianceTable from "../../components/complianceTable/ComplianceTable";
import 
{ barChartBoxProject,
  barChartBoxCategory,
  chartBoxRevenue,
  complianceData,
  complianceData2, } from "../../data"
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
      <ChartBox icon={""} dataKey={""} number={""} percentage={0} chartData={[]} {...chartBoxRevenue} />
      </div>

      <div className="box box5">
        <BarChartBox {...barChartBoxProject} />
      </div>

      <div className="box box6">
      <CategoryBarChart  {...barChartBoxCategory} />
      </div>

      <div className="box box8">
      <h1>Compliance Table (Less than 98%)</h1>
      <ComplianceTable data= {complianceData}/>
      </div>

      <div className="box box9">
        <h1>Compliance Table 98% - 99%</h1>
        <ComplianceTable data={complianceData2}/>
      </div>

    </div>
  );
};

export default Home;
