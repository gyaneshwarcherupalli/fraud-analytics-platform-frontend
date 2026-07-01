import LineTrendChart from '../charts/LineTrendChart'
import DashboardWidget from './DashboardWidget'

function RiskTrendWidget({ values, labels }) {
  return (
    <DashboardWidget
      title="Risk Trend"
      subtitle="Average risk score across recent transaction windows"
      className="widget-large"
    >
      <LineTrendChart values={values} labels={labels} />
    </DashboardWidget>
  )
}

export default RiskTrendWidget
