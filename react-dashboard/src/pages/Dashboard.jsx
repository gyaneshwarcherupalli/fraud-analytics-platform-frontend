import DashboardCard from '../components/cards/DashboardCard'
import GeoRiskWidget from '../components/widgets/GeoRiskWidget'
import MerchantRiskWidget from '../components/widgets/MerchantRiskWidget'
import RecentTransactionsWidget from '../components/widgets/RecentTransactionsWidget'
import RiskTrendWidget from '../components/widgets/RiskTrendWidget'

const metrics = [
  {
    label: 'Total Transactions',
    value: '152,304',
    change: '+8.4% vs last week',
    trend: 'up',
  },
  {
    label: 'Flagged Alerts',
    value: '2,946',
    change: '+2.1% vs last week',
    trend: 'up',
  },
  {
    label: 'Fraud Loss Prevented',
    value: '$428,900',
    change: '+11.7% vs last week',
    trend: 'up',
  },
  {
    label: 'Average Risk Score',
    value: '67 / 100',
    change: '-1.3% vs last week',
    trend: 'down',
  },
]

const trendLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const trendValues = [54, 57, 61, 63, 62, 66, 69]

const merchantBreakdown = [
  { label: 'Marketplaces', value: 38 },
  { label: 'Digital Goods', value: 29 },
  { label: 'Travel', value: 21 },
  { label: 'Other', value: 12 },
]

const regionBreakdown = [
  { label: 'North America', value: 42, color: '#1f7a5c' },
  { label: 'Europe', value: 27, color: '#e38f45' },
  { label: 'LATAM', value: 18, color: '#2f556e' },
  { label: 'APAC', value: 13, color: '#6c8fbc' },
]

const recentTransactions = [
  {
    id: 'TRX-009184',
    merchant: 'Aster Digital',
    region: 'US',
    amount: '$1,280.00',
    risk: 89,
  },
  {
    id: 'TRX-009186',
    merchant: 'Global Trip Hub',
    region: 'ES',
    amount: '$932.45',
    risk: 84,
  },
  {
    id: 'TRX-009193',
    merchant: 'Blue Cart',
    region: 'BR',
    amount: '$715.20',
    risk: 81,
  },
  {
    id: 'TRX-009201',
    merchant: 'Pixel Cloud',
    region: 'SG',
    amount: '$2,110.13',
    risk: 92,
  },
]

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="metric-grid">
        {metrics.map((metric) => (
          <DashboardCard
            key={metric.label}
            title={metric.label}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
          />
        ))}
      </div>

      <div className="dashboard-grid">
        <RiskTrendWidget labels={trendLabels} values={trendValues} />
        <GeoRiskWidget regions={regionBreakdown} />
        <MerchantRiskWidget merchants={merchantBreakdown} />
      </div>

      <RecentTransactionsWidget transactions={recentTransactions} />
    </section>
  )
}

export default Dashboard