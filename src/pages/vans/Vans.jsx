import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Vans = () => {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(van => (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={van.id}>
      <Link to={`/vans/${van.id}`} className='text-decoration-none text-black'>
        <img src={van.imageUrl} alt={van.name} className='img-fluid rounded' />
        <div className='mt-1'>
          <h3>{van.name}</h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`badge van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className='px-4 py-5'>
      <h1 className='fw-bold'>Explore our van options</h1>
      <div className='van-list row g-4 mt-5'>{vanElements}</div>
    </div>
  )
}

export default Vans
