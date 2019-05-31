import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../login/Login';
import Logout from '../login/Logout';
import Signup from '../login/Signup';
import Forum from '../forum/Forum';
import Read from '../forum/Read';
import Create from '../forum/Create';
import CreateCategory from '../category/CreateCategory';

const routes = [
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/signup', component: Signup },
  { path: '/forum', component: Forum, name: 'forum' },
  { path: '/ask', component: Create },
  { path: '/question/:slug', component: Read, name: 'read' },
  { path: '/category', component: CreateCategory },
//   { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang: false,
  mode: 'history'
})

export default router