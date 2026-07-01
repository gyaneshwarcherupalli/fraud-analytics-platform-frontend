import DashboardWidget from './DashboardWidget'

function RecentTransactionsWidget({ transactions }) {
  return (
    <DashboardWidget
      title="Recent Suspicious Transactions"
      subtitle="Latest alerts sorted by risk score"
      className="widget-full"
    >
      <div className="transaction-table-wrap">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Merchant</th>
              <th>Region</th>
              <th>Amount</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.merchant}</td>
                <td>{transaction.region}</td>
                <td>{transaction.amount}</td>
                <td>
                  <span className="risk-pill">{transaction.risk}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardWidget>
  )
}

export default RecentTransactionsWidget
