import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Update from '@/components/Update'
// import login from '@/views/login'
// import home from '@/views/home'
import layout from '@/views/layout/layout'
import NotFound from '@/views/404'

Vue.use(Router)

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/login/index',
    hidden: true
  },
  {
    path: '/login/index',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    name: 'house',
    path: '/house',
    component: layout,
    redirect: '/house/list',
    meta: {title: '房源本'},
    children: [
        {path: 'list', component: () => import('@/views/house/list'), meta: {title: '列222表'}},
        {path: 'add', component: Hello, hidden: true}
    ]
  },
  {
    name: 'client',
    path: '/client',
    component: layout,
    redirect: '/client/list',
    meta: {title: '客户本'},
    children: [
        {path: 'list', name: '选项2-1', component: () => import('@/views/client/list'), meta: {title: '列a222表'}}
    ]
  },
  {
    name: 'backend',
    path: '/house',
    component: layout,
    redirect: '/house/list',
    meta: {title: '管理中心'},
    children: [
        {path: 'list', name: '小区', component: () => import('@/views/house/list'), meta: {title: '小区'}},
        {path: 'list', name: '用户', component: () => import('@/views/house/list'), meta: {title: '用户'}}
    ]
  },
  {
    path: '/update',
    name: 'Update',
    component: Update,
    hidden: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

export default new Router({
  routes: constantRouterMap
})
