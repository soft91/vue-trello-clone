import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue';
import BoardContainer from '../components/board/BoardContainer.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/board/:id',
    component: BoardContainer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
