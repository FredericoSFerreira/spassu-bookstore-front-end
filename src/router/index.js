import {createRouter, createWebHistory} from 'vue-router'

// Auth Default Routes
const authChildRoutes = (prefix) => [
  {
    path: 'login',
    name: prefix + '.login',
    meta: {auth: false, name: 'Login'},
    component: () => import('@/views/auth/default/SignIn.vue')
  },
  {
    path: 'register',
    name: prefix + '.register',
    meta: {auth: false, name: 'Register'},
    component: () => import('@/views/auth/default/SignUp.vue')
  }
]

// Dashboard routes
const booksChildRoutes = (prefix) => [
  {
    path: 'livros',
    name: prefix + '.index',
    meta: {auth: true, name: 'Livros', isBanner: true},
    component: () => import('@/views/books/LivrosPage.vue')
  },
  {
    path: '',
    name: prefix + '.dashboard',
    meta: {auth: true, name: 'Dashboard', isBanner: true},
    component: () => import('@/views/books/DashboardPage.vue')
  },
  {
    path: 'assuntos',
    name: prefix + '.assuntos',
    meta: {auth: true, name: 'Assuntos', isBanner: true},
    component: () => import('@/views/books/AssuntosPage.vue')
  },
  {
    path: 'autores',
    name: prefix + '.autores',
    meta: {auth: true, name: 'Autores', isBanner: true},
    component: () => import('@/views/books/AutoresPage.vue')
  },
]


// Default routes
const routes = [
  // Default Pages
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: booksChildRoutes('default')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: booksChildRoutes('books')
  },
  // Auth Skins
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/guest/BlankLayout.vue'),
    children: authChildRoutes('auth')
  },
]

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to) => {

  let user = localStorage.getItem("user");
  if (
    !user && to.name !== 'auth.login'
  ) {
    return { name: 'auth.login', query: { 'redirect': true} }
  }
})

export default router
