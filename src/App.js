import React from 'react'
import PropTypes from 'prop-types'
import RouteRenderer from './routes/RouteRenderer'
import routeType from './routes/routeType'

function App({ routeConfig }) {
  return <RouteRenderer routeConfig={routeConfig} />
}

App.propTypes = {
  routeConfig: PropTypes.arrayOf(PropTypes.shape(routeType)).isRequired,
}

export default App
