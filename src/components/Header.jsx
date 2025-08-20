import { Link, NavLink } from 'react-router'
const Header = () => {
  return (
    <header className='sticky-top' style={{ height: '110px' }}>
      <nav className='navbar h-100'>
        <div className='container-fluid'>
          <Link className='navbar-brand fw-bold text-uppercase' to='/'>
            #VanLife
          </Link>
          <ul className='navbar-nav flex-row nav-underline fw-semibold'>
            <li className='nav-item'>
              <NavLink
                to='/host'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Host
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/vans'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
