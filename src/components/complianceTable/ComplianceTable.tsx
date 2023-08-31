import "./complianceTable.scss";

interface SiteDataItem {
  siteID: string;
  state: string;
  totalTime: number;
  compliance: number;
}

interface TableProps {
  data: SiteDataItem[];
}


const ComplianceTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="complianceTable">
      <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Site ID</th>
                        <th>Total Time</th>
                        <th>Compliance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>                           
                            <td>{item.state}</td>
                            <td>{item.siteID}</td>
                            <td>{item.totalTime}</td>
                            <td>{item.compliance.toFixed(2)} %</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default ComplianceTable;
