import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router'
/**
 * @typedef {import('react-router').To} To
 *
 * @typedef LinkProps
 * @property {To} to - The destination path for the navigation item.
 * @property {React.ReactNode} [children] - The content to be displayed inside the navigation item.
 */

/**
 * If true, the link will only be active if the location is exactly matched.
 * @typedef {boolean} end
 */

/**
 * NavLink Props
 * @typedef {LinkProps & {end?: end}} NavLinkProps
 */

/**
 * @typedef {Object} NavbarProps
 * @property {LinkProps} [brand] - The brand item for the navbar.
 * @property {NavLinkProps[]} [items=[]] - Array of navigation items.
 * @property {string} [className] - Additional CSS classes for the navbar.
 * @property {React.CSSProperties} [style] - Inline styles for the navbar.
 */

/**
 * Reusable Navbar component built with Bootstrap and React Router.
 *
 * @param {NavbarProps} props - Component props
 *
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @example
 * // With brand and nav links
 * <Navbar brand={{ to: '/', children: 'MyApp' }} items={[{ to: '/about', children: 'About' }]} />
 *
 * @example
 * // With only nav links
 * <Navbar items={[{ to: '/host', children: 'Host', end: true }, { to: '/about', children: 'About' }, { to: '/contact', children: 'Contact' }]} />
 */
const Navbar = ({ brand, items = [], className, style, ...rest }) => {
  return (
    <nav className={`navbar ${className}`} style={style} {...rest}>
      <div className='container-fluid'>
        {brand && (
          <Link className='navbar-brand fw-bold text-uppercase' to={brand.to}>
            {brand.children}
          </Link>
        )}
        {items.length > 0 && (
          <ul className='navbar-nav flex-row nav-underline fw-semibold'>
            {items.map(({ to, children, end }, index) => (
              <li key={index} className='nav-item'>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  end={end} // ensures exact match
                >
                  {children}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
const LinkPropType = PropTypes.shape({
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node,
})

const NavLinkPropType = PropTypes.shape({
  ...LinkPropType,
  end: PropTypes.bool,
})

Navbar.propTypes = {
  brand: LinkPropType,
  items: PropTypes.arrayOf(NavLinkPropType),
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Navbar
