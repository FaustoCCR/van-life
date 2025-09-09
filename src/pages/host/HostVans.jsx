import { Link } from 'react-router'
import useFetch from '../../hooks/useFetch'

const HostVans = () => {
  const { data, loading, error } = useFetch('/api/host/vans')

  if (loading)
    return (
      <div className='spinner-grow'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )

  if (error)
    return <div className='alert alert-danger'>Error: {error.message}</div>

  /**
   * Card component for each van
   * @param {object} van
   * @returns {JSX.Element}
   */
  const VanCard = van => (
    <Link to={`/host/vans/${van.id}`} className='col text-decoration-none'>
      <div className='card border-0 p-4' style={{ backgroundColor: 'white' }}>
        <div className='row g-0'>
          <div className='col-4'>
            <img
              src={van.imageUrl}
              className='img-fluid rounded'
              alt={van.name}
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{van.name}</h5>
              <p className='card-text text-secondary'>${van.price}/day</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )

  return (
    <section className='px-4'>
      <h2 className='mb-4'>Your listed vans</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
        {data?.vans.length > 0 ? (
          data?.vans.map(van => <VanCard key={van.id} {...van} />)
        ) : (
          <p>You have no vans listed.</p>
        )}
      </div>
    </section>
  )
}

export default HostVans
