import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { routes } from './routeConfig'

/**
 * A route that requires authentication. Redirects if not authenticated.
 * @param {{redirect: string} & RouteProps} props
 */
function ProtectedRoute({ redirect = routes.authLogin, ...props }) {
  //TODO: add useSelector with Redux
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Redirect to={redirect} />
  }

  return <Route {...props} />
}

ProtectedRoute.propTypes = {
  redirect: PropTypes.string,
}

export default ProtectedRoute
