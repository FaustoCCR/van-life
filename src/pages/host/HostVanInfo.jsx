import { useOutletContext } from 'react-router'

const HostVanInfo = () => {
  const { currentVan } = useOutletContext() // to access the van data passed from HostVanDetail
  return (
    <section>
      <p className='fw-medium fs-6 lh-sm'>
        <strong className='fw-bold'>Name:</strong> {currentVan.name}
      </p>
      <p className='fw-medium fs-6 lh-sm'>
        <strong className='fw-bold'>Category:</strong> {currentVan.type}
      </p>
      <p className='fw-medium fs-6 lh-sm'>
        <strong className='fw-bold'>Description:</strong>{' '}
        {currentVan.description}
      </p>
      <p className='fw-medium fs-6 lh-sm'>
        <strong className='fw-bold'>Visibility:</strong> Public
      </p>
    </section>
  )
}
export default HostVanInfo
