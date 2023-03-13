import { createRouter, createWebHistory } from 'vue-router'
// import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },

    {
      path: '/films/:id',
      component: () => import('../views/FilmDetails.vue')
    },
    {
      path: '/filmedit',
      name: 'filmedit',
      component: () => import('../views/edit/FilmEdit.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminPanel.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (!token) {
          next('/login') // redirect to login page if token is not found
        } else {
          next()
        }
      }
    },
    {
      path: '/deletePanel',
      name: 'deletepanel',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/admin/delete/deletePanel.vue')
    },
    {
      path: '/movieedit/:id',
      name: 'movieedit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/admin/edit/MovieEdit.vue')
    },
    // {
    //   path: '/movie_edit/:id',
    //   name: 'movie_edit',
    //   component: () => import('../views/users/EditPanel.vue')
    // },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: () => import('../views/users/UserPanel.vue')
    // },

    {
      path: '/:catchAll(.*)',
      component: () => import('../components/notfound/NotFound.vue')
    }
  ]
})

export default router
