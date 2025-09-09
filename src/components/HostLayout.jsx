import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'

const HostLayout = () => {
  return (
    <>
      <Navbar
        className='mb-4'
        items={[
          { to: '/host', children: 'Dashboard', end: true },
          { to: '/host/income', children: 'Income' },
          { to: '/host/vans', children: 'Vans' },
          { to: '/host/reviews', children: 'Reviews' },
        ]}
      />
      <Outlet />
    </>
  )
}

export default HostLayout
