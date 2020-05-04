import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

/**
 * Creates a React element based on a route.
 * @param {Route} route
 */
function createElement(route) {
  if (route.redirect) {
    return <Redirect key={route.name} from={route.path} to={route.redirect} exact />
  }

  if (route.protected) {
    return <ProtectedRoute key={route.name} path={route.path} exact={route.exact} component={route.component} />
  }

  return <Route key={route.name} path={route.path} exact={route.exact} component={route.component} />
}

/**
 * Recursively creates route elements based on a route config.
 * @param {Route[]} routeConfig
 */
function createElements(routeConfig) {
  const elements = []

  for (let i = 0; i < routeConfig.length; i++) {
    elements.push(createElement(routeConfig[i]))

    if (routeConfig[i].routes) {
      elements.push(...createElements(routeConfig[i].routes))
    }
  }

  return elements
}

/**
 * Renders routes based on a given route config.
 * @param {Route[]} routes
 */
function RouteRenderer({ routeConfig, ...props }) {
  return <Switch {...props}>{createElements(routeConfig)}</Switch>
}

RouteRenderer.propTypes = {
  routeConfig: PropTypes.any,
}

export default RouteRenderer
