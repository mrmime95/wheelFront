import PropTypes from 'prop-types'

function route() {
  return {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.elementType,
    exact: PropTypes.bool,
    redirect: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.shape(route)),
  }
}

export default route()
