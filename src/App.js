import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import RouteRenderer from './routes/RouteRenderer'
import routeType from './routes/routeType'
import { GlobalStyles } from './utils/theme'

import AuthContext from './context/authContext'
import Loading from './components/Loading'

function App({ routeConfig }) {
  if (useContext(AuthContext).loading) {
    return <Loading />
  }

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
