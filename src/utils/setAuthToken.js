import axios from 'axios'

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token.type} ${token.access_token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
