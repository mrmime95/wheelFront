import loadable from '@loadable/component'

// Main pages
const Home = loadable(() => import('../pages/Home'))

// Auth pages
const AuthLogin = loadable(() => import('../pages/Auth/Login'))
const AuthRegister = loadable(() => import('../pages/Auth/Register'))

// Error pages
const NotFound = loadable(() => import('../pages/NotFound'))

export const routes = {
  home: '/',
  auth: '/auth',
  authLogin: '/auth/login',
  authRegister: '/auth/register',
  notFound: '*',
}

const routeConfig = [
  {
    name: 'Home',
    path: routes.home,
    component: Home,
    exact: true,
    protected: true,
  },
  {
    name: 'Auth',
    path: routes.auth,
    redirect: routes.authLogin,
    exact: true,
    routes: [
      {
        name: 'AuthLogin',
        path: routes.authLogin,
        component: AuthLogin,
      },
      {
        name: 'AuthRegister',
        path: routes.authRegister,
        component: AuthRegister,
      },
    ],
  },
  {
    name: 'NotFound',
    path: routes.notFound,
    component: NotFound,
  },
]

export default routeConfig
