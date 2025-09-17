import PropTypes from 'prop-types'

/**
 * @typedef {Object} ErrorAlertProps
 * @property {Error} error - Error object.
 * @property {function} [action] - Optional callback function to close the alert.
 * @property {string} [className] - Additional CSS classes for the alert.
 * @property {React.CSSProperties} [style] - Inline styles for the alert.
 * @property {React.ReactNode} [icon] - Optional icon to display in the alert.
 */

/**
 * Error Alert component to display error messages
 * @param {ErrorAlertProps} props
 * @returns {JSX.Element}
 */
const ErrorAlert = ({ error, action, className, style, icon }) => {
  if (error) {
    return (
      <div
        className={`alert alert-danger d-flex align-items-center gap-2 flex-column ${className}`}
        style={style}
      >
        {icon || (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-exclamation-circle'
            viewBox='0 0 16 16'
          >
            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
            <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z' />
          </svg>
        )}
        <div className='d-flex flex-column'>
          <h4 className='alert-heading'>{error.name || 'Error'}</h4>
          <p>{error.message || 'An unexpected error occurred.'}</p>

          {action && (
            <button
              type='button'
              className='btn btn-sm btn-outline-danger'
              onClick={action}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-clockwise'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z'
                />
                <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466' />
              </svg>
            </button>
          )}
        </div>
      </div>
    )
  }
  return null
}

ErrorAlert.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  action: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
}

export default ErrorAlert
