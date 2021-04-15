import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from 'layouts/index.vue';

// 使用工厂函数创建router实例
/**
 * Note:
 *
 * hidden: true 设置为true时路由将显示在sidebar中
 * alwaysShow: true, 总是显示在菜单跟目录
 * redirect: noRedirect 设置noRedirect时，breadcrumb中不会跳转
 * name: 'router-name' name用于keep-alive中
 *
 * meata: {
 *   roles: ['admin', 'editor'] 页面可访问角色设置
 *   title: 'title' sidebar和breadcrumb显示的标题
 *   icon: 'svg-name'/'el-icon-x' sidebar显示的图标
 *   breadcrumb: false,
 *   activeMenu: '/example/list' 设置一个path, sidebar将会在高亮匹配项
 * }
 */
export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '导航', icon: 'el-icon-s-home' },
    children: [
      {
        path: 'home',
        component: () => import('views/home.vue'),
        name: 'Home',
        hidden: true,
        meta: {
          title: '首页',
          icon: 'el-icon-s-home',
        },
        children: [{
          path: ':id',
          component: () => import('views/detail.vue'),
          name: 'Detail',
          hidden: true,
          meta: {
            title: '详情',
            icon: 'el-icon-s-home',
            activeMenu: '/home'
          }
        }]
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'el-icon-user-solid',
    },
    redirect: '/users/list',
    children: [
      {
        path: "list",
        component: () => import('views/users/list.vue'),
        meta: {
          title: '用户列表',
          icon: 'el-icon-document'
        }
      }, {
        path: "create",
        component: () => import('views/users/create.vue'),
        meta: {
          title: '创建新用户',
          icon: 'el-icon-document',
          activeMenu: '/users/list'
        }
      }, {
        path: 'edit/:id(\\d+)',
        name: 'useEdit',
        component: () => import('views/users/edit.vue'),
        hidden: true,
        meta: {
          title: '编辑用户信息',
          activeMenu: '/users/list'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
