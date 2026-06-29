import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import './App.css'

function PlaceholderPage({ title }) {
  return (
    <section className="placeholder-page">
      <h2>{title}</h2>
      <p>This page is ready for your feature implementation.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-content-wrapper">
        <Navbar />
        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alerts" element={<PlaceholderPage title="Alerts" />} />
            <Route
              path="/transactions"
              element={<PlaceholderPage title="Transactions" />}
            />
            <Route
              path="/fraud-analysis"
              element={<PlaceholderPage title="Fraud Analysis" />}
            />
            <Route
              path="/investigations"
              element={<PlaceholderPage title="Investigations" />}
            />
            <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
