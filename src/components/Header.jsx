import { Link, NavLink } from 'react-router'
import Navbar from './shared/Navbar'
const Header = () => {
  return (
    <header className='sticky-top' style={{ height: '110px' }}>
      <Navbar
        className='h-100'
        brand={{ to: '/', children: '#VanLife' }}
        items={[
          { to: '/host', children: 'Host' },
          { to: '/about', children: 'About' },
          { to: '/vans', children: 'Vans' },
        ]}
      />
    </header>
  )
}

export default Header
