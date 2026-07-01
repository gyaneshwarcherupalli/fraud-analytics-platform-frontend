import DonutBreakdownChart from '../charts/DonutBreakdownChart'
import DashboardWidget from './DashboardWidget'

function GeoRiskWidget({ regions }) {
  return (
    <DashboardWidget title="Top Risk Regions" subtitle="Regional concentration of suspicious activity">
      <DonutBreakdownChart segments={regions} />
    </DashboardWidget>
  )
}

export default GeoRiskWidget
