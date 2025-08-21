import { Link } from 'react-router'
import bgImage from '../assets/images/about-hero.png'
const About = () => {
  return (
    <>
      <img src={bgImage} className='img-fluid' />
      <div className='px-4 py-5'>
        <div className='mb-5'>
          <h1 className='fw-bold lh-lg'>
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className='lh-sm'>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className='lh-sm'>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div
          className='px-4 pb-4 rounded-1'
          style={{ backgroundColor: '#ffcc8d' }}
        >
          <h2 className='m-0 py-5 fw-semibold'>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className='link-button text-bg-dark' to='/vans'>
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
