import loadable from '@loadable/component'

// Main pages
const LayoutPage = loadable(() => import('../pages/LayoutPage'))
const Home = loadable(() => import('../pages/Home'))
const Cart = loadable(() => import('../pages/Cart'))
const ThankYou = loadable(() => import('../pages/ThankYou'))

// Auth pages
const Auth = loadable(() => import('../pages/Auth'))

// Error pages
const NotFound = loadable(() => import('../pages/NotFound'))

export const routes = {
  landingPage: '/',
  home: '/',
  cart: '/cart',
  ty: '/thank-you',
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
    name: 'LandingPage',
    path: routes.landingPage,
    component: LayoutPage,
  },
  {
    name: 'NotFound',
    path: routes.notFound,
    component: NotFound,
  },
]

export const loggedInRoutes = [
  {
    name: 'Home',
    path: routes.home,
    component: Home,
    exact: true,
    protected: true,
  },
  {
    name: 'Cart',
    path: routes.cart,
    component: Cart,
    exact: true,
    protected: true,
  },
  {
    name: 'ThankYou',
    path: routes.ty,
    component: ThankYou,
    exact: true,
    protected: true,
  },
]

export default routeConfig
