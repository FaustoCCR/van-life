import PropTypes from 'prop-types'

/**
 * Loader component to indicate loading state
 * @param {Object} props
 * @param {string} [props.message='Loading...'] - Accessible message for screen readers.
 * @param {'border' | 'grow'} [props.type='border'] - Type of spinner ('border' or 'grow').
 * @param {string} [props.variant='dark'] - Bootstrap color variant (e.g., 'primary', 'secondary', etc.).
 * @returns {JSX.Element}
 */
const Loader = ({
  message = 'Loading...',
  type = 'border',
  variant = 'dark',
}) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className={`spinner-${type} text-${variant}`} role='status'>
        <span className='visually-hidden'>{message}</span>
      </div>
    </div>
  )
}

Loader.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['border', 'grow']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
}
export default Loader
