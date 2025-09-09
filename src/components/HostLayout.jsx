import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'

const HostLayout = () => {
  return (
    <>
      <Navbar
        className='mb-4'
        items={[
          { to: '.', children: 'Dashboard', end: true }, // . indicates the current route
          { to: 'income', children: 'Income' },
          { to: 'vans', children: 'Vans' },
          { to: 'reviews', children: 'Reviews' },
        ]}
      />
      <Outlet />
    </>
  )
}

export default HostLayout
