import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import List from './pages/list/List'
import City from './pages/city/City'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/list',
    name: 'List',
    component: List
  },{
    path: '/city',
    name: 'City',
    component: City
  }]
})
