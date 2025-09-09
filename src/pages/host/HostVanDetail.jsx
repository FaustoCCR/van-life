import { useParams, Link } from 'react-router'
import useFetch from '../../hooks/useFetch'

const HostVanDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`/api/host/vans/${id}`)
  const { vans } = data || {}
  console.log(data, loading, error)

  return (
    <section className='px-4'>
      <Link
        to='..'
        relative='path'
        className='icon-link link-dark link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-arrow-left-short'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'
          />
        </svg>
        <span>Back to all vans</span>
      </Link>
      <div className='mt-4'>
        {loading && <h2>Loading...</h2>}
        {error && <h2 className='text-danger'>Error: {error}</h2>}
        {vans && (
          <div
            className='card p-4 border-0'
            style={{ backgroundColor: 'white' }}
          >
            <div className='row g-3 g-md-4'>
              <div className='col-sm-4'>
                <img
                  src={vans.imageUrl}
                  alt={vans.name}
                  className='img-fluid rounded-1'
                />
              </div>
              <div className='col-sm-8 align-self-md-center'>
                <div className='card-body p-0'>
                  <i className={`van-type van-type-${vans.type} badge mb-2`}>
                    {vans.type}
                  </i>
                  <h3 className='card-title'>{vans.name}</h3>
                  <h4 className='card-subtitle'>
                    ${vans.price}
                    <small>/day</small>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HostVanDetail
