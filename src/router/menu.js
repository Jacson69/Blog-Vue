export default [
    {
      path: 'order',
      name: 'ORDER',
      component: () => import('@/pages/order/index.vue'),
      redirect: '/order/list',
      meta: {
        label: '首页',
        icon: 'sy',
      },
      children: [
        {
          path: 'list',
          name: 'ORDER-LIST',
          meta: {
            label: '订单列表',
          },
          component: () => import('@/pages/order/list/index.vue'),
        },
        {
          path: 'add',
          name: 'ORDER-ADD',
          meta: {
            label: '添加订单',
          },
          component: () => import('@/pages/order/add/index.vue'),
        },
      ],
    },
    {
      path: 'team',
      name: 'TEAM',
      meta: {
        label: '团队动态',
        icon: 'ic_fluent_animal_turtle_24_filled',
      },
      component: () => import('@/pages/team/index.vue'),
    },
    {
      path: 'community',
      name: 'COMMUNITY',
      meta: {
        label: '社区动态',
        icon: 'sq',
      },
      component: () => import('@/pages/community/index.vue'),
    },
    {
      path: 'article',
      name: 'ARTICLE',
      meta: {
        label: '文章',
        icon: 'wz',
      },
      component: () => import('@/pages/article/index.vue'),
    },
    {
      path: 'profile',
      name: 'PROFILE',
      meta: {
        label: '个人中心',
        icon: 'gr',
      },
      component: () => import('@/pages/profile/index.vue'),
    },
    {
      path: 'setting',
      name: 'SETTING',
      meta: {
        label: '设置中心',
        icon: 'sz',
      },
      component: () => import('@/pages/setting/index.vue'),
    },
  ];
  