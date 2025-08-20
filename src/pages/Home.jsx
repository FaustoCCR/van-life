import { Link } from 'react-router'
const Home = () => {
  return (
    <div className='home-container d-flex flex-column justify-content-center p-4 p-md-5'>
      <h1 className='fw-bold fs-2 lh-base'>
        You got the travel plans, we got the travel vans
      </h1>
      <p className='lh-sm'>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip
      </p>
      <Link to='vans' className='link-button bg-primary w-100 mt-4'>
        Find your van
      </Link>
    </div>
  )
}

export default Home
