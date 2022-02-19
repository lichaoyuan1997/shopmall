import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

const home = () => import('views/home/Home.vue')
const category = () => import('views/category/Category.vue')
const cart = () => import('views/cart/Cart.vue')
const profile = () => import('views/profile/Profile.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path:'/profile',
    component: profile
  }
]

let router = new vueRouter({
  routes,
  mode:'history'
})

export default router