import { useOutletContext } from 'react-router'

const HostVanPricing = () => {
  const { currentVan } = useOutletContext()
  return (
    <h3 className='fs-3 fw-medium'>
      ${currentVan.price}
      <span className='text-muted fs-6'>/day</span>
    </h3>
  )
}

export default HostVanPricing
