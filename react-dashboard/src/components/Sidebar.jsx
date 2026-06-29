import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/alerts', label: 'Alerts' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/fraud-analysis', label: 'Fraud Analysis' },
  { to: '/investigations', label: 'Investigations' },
  { to: '/reports', label: 'Reports' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">FRAUD OPS</div>
      <nav aria-label="Primary navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'sidebar-link active' : 'sidebar-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar