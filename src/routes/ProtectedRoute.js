import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { routes } from './routeConfig'

import AuthContext from '../context/authContext'

/**
 * A route that requires authentication. Redirects if not authenticated.
 * @param {{redirect: string} & RouteProps} props
 */
function ProtectedRoute({ redirect = routes.auth, ...props }) {
  const { isAuthenticated } = useContext(AuthContext).state

  if (!isAuthenticated) {
    return <Redirect to={redirect} />
  }

  return <Route {...props} />
}

ProtectedRoute.propTypes = {
  redirect: PropTypes.string,
}

export default ProtectedRoute
