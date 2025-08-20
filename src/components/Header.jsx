import { Link, NavLink } from 'react-router'
const Header = () => {
  return (
    <header className='sticky-top' style={{ height: '110px' }}>
      <nav className='navbar h-100'>
        <div className='container-fluid'>
          <Link className='navbar-brand fw-bold text-uppercase' to='/'>
            #VanLife
          </Link>
          <div className='d-flex gap-2 fw-semibold'>
            <NavLink
              to='/host'
              className={({ isActive }) =>
                `link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover ${isActive ? 'link-dark fw-bold' : ''}`
              }
            >
              Host
            </NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/vans'>Vans</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
{
  /* <header>
      <Link className='site-logo' to='/'>
        #VanLife
      </Link>
      <nav>
        <NavLink
          to='/host'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Vans
        </NavLink>
        </nav> 
      </header> */
}
