import { Link, useSearchParams } from 'react-router'
import useFetch from '../../hooks/useFetch'
import ErrorAlert from '../../components/shared/ErrorAlert'
import Loader from '../../components/shared/Loader'

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const { data, loading, error, refetch } = useFetch('/api/vans')
  console.log(data, loading, error)

  const vans = (data?.vans || []).filter(van =>
    typeFilter ? van.type === typeFilter : true,
  )
  /**
   *
   * @param {Array<Object>} vans
   * @returns {JSX.Element[]}
   */
  const renderVanList = vans => {
    if (vans.length === 0) {
      return (
        <p className='text-center'>
          No vans available for the selected filter.
        </p>
      )
    }
    return vans.map(van => (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={van.id}>
        <Link
          to={`/vans/${van.id}`}
          className='text-decoration-none text-black'
        >
          <img
            src={van.imageUrl}
            alt={van.name}
            className='img-fluid rounded'
          />
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
  }

  return (
    <div className='px-4 py-5'>
      {loading && <Loader />}
      {error && <ErrorAlert error={error} action={refetch} />}
      {!loading && !error && vans && (
        <>
          <h1 className='fw-bold'>Explore our van options</h1>
          <div className='van-list row g-4 mt-5'>{renderVanList(vans)}</div>
        </>
      )}
    </div>
  )
}

export default Vans
