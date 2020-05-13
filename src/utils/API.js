import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.responseType = 'json'

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)

export const setAuthToken = (token) =>
  token
    ? (axios.defaults.headers.common['Authorization'] = `${token.token_type} ${token.access_token}`)
    : delete axios.defaults.headers.common['Authorization']

const user = {
  get: (params) => axios.get('/user', { params }),
}

const auth = {
  login: (params) => axios.post('/auth/login', params),
  register: (params) => axios.post('/auth/register', params),
  logour: (params) => axios.get('/auth/logout', { params }),
  user: (params) => axios.get('/auth/user', { params }),
}

const product = {
  get: (params) => axios.get('/product', { params }),
  getById: (id) => axios.get(`/product/${id}`),
  getAPromotion: () => axios.get('/product/promo'),
}

export default {
  user,
  auth,
  product,
}
