import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

const HostLayout = () => {
  function isActiveStyle({ isActive }) {
    if (isActive) {
      return {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
      }
    }
  }
  return (
    <>
      <nav className='host-nav'>
        <NavLink to='/host' style={isActiveStyle} end>
          Dashboard
        </NavLink>
        <NavLink to='/host/income' style={isActiveStyle}>
          Income
        </NavLink>
        <NavLink to='/host/reviews' style={isActiveStyle}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
