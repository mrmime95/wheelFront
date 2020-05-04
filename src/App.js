import React from 'react'
import PropTypes from 'prop-types'
import RouteRenderer from './routes/RouteRenderer'
import routeType from './routes/routeType'
import { GlobalStyles } from './utils/theme'

function App({ routeConfig }) {
  return (
    <>
      <GlobalStyles />
      <RouteRenderer routeConfig={routeConfig} />
    </>
  )
}

App.propTypes = {
  routeConfig: PropTypes.arrayOf(PropTypes.shape(routeType)).isRequired,
}

export default App
