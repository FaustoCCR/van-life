import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const VanDetail = () => {
  const params = useParams()
  const [van, setVan] = useState(null)
  useEffect(() => {
    fetch(`/api/vans/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  return (
    <div className='p-4 pb-5'>
      {van ? (
        <div className='d-flex flex-column'>
          <img
            src={van.imageUrl}
            alt={van.name}
            className='img-fluid rounded mb-5'
          />
          <i className={`badge van-type ${van.type} selected align-self-start`}>
            {van.type}
          </i>
          <h2 className='fs-2 my-2'>{van.name}</h2>
          <p className='mb-2'>
            <span className='fw-bold fs-5'>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button bg-primary text-white align-self-md-start'>
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default VanDetail
