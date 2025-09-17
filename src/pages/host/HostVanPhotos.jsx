import { useOutletContext } from 'react-router'

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()
  return (
    <img
      src={currentVan.imageUrl}
      alt={currentVan.name}
      className='img-fluid rounded w-25'
    />
  )
}

export default HostVanPhotos
