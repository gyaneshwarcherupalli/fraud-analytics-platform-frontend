import BarDistributionChart from '../charts/BarDistributionChart'
import DashboardWidget from './DashboardWidget'

function MerchantRiskWidget({ merchants }) {
  return (
    <DashboardWidget
      title="Merchant Risk Distribution"
      subtitle="Share of risky traffic by merchant segment"
    >
      <BarDistributionChart items={merchants} />
    </DashboardWidget>
  )
}

export default MerchantRiskWidget
