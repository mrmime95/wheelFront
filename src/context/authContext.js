import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API, { setAuthToken } from '../utils/API'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [state, setState] = useState({})
  const functions = { handleUserExistsChecker, handleUserLogIn, handleUserRegister }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async function fetchData() {
      const token = JSON.parse(localStorage.getItem('token'))
      if (token) {
        setAuthToken(token)
        try {
          const resp = await API.auth.user()
          if (resp.email) {
            setState((state) => ({ ...state, email: resp.email, existingUser: true, isAuthenticated: true }))
          } else {
            clearData()
          }
        } catch (e) {
          clearData()
        }
      }
      setLoading(false)
    })()
  }, [])

  async function handleUserExistsChecker(email) {
    try {
      const resp = await API.user.get({ email })
      setState({ ...state, email, existingUser: resp.userExists })
    } catch (e) {
      alert(e.errors.email)
      clearData()
    }
  }

  async function handleUserLogIn(password) {
    try {
      const resp = await API.auth.login({ email: state.email, password })
      setUserAuthenticated(resp)
    } catch (e) {
      alert(e.message)
      clearData()
    }
  }

  async function handleUserRegister(data) {
    try {
      const resp = await API.auth.register({ email: state.email, ...data })
      setUserAuthenticated(resp)
    } catch (e) {
      alert(e.message)
      clearData()
    }
  }

  function setUserAuthenticated(token) {
    setState({ ...state, token: token, isAuthenticated: true })
    setAuthToken(token)
    localStorage.setItem('token', JSON.stringify(token))
  }

  function clearData() {
    setAuthToken()
    setState({})
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ state, loading, functions }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext
