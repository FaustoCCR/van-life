import { Link } from 'react-router'
import { Outlet } from 'react-router'

const HostLayout = () => {
  return (
    <>
      <nav>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
