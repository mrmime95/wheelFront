import loadable from '@loadable/component'

// Main pages
const Home = loadable(() => import('../pages/Home'))

// Auth pages
const Auth = loadable(() => import('../pages/Auth'))

// Error pages
const NotFound = loadable(() => import('../pages/NotFound'))

export const routes = {
  home: '/',
  auth: '/auth',
  notFound: '*',
}

const routeConfig = [
  {
    name: 'Auth',
    path: routes.auth,
    exact: true,
    component: Auth,
  },
  {
    name: 'Home',
    path: routes.home,
    component: Home,
    exact: true,
    protected: true,
  },
  {
    name: 'NotFound',
    path: routes.notFound,
    component: NotFound,
  },
]

export default routeConfig
