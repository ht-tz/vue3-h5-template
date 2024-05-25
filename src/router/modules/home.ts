export default {
    path: '/',
    name: 'Layout',
    redirect: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/layout/index.vue'),
    meta: {
        role: ['common', 'admin'],
        parentRouter: 'home'
    },
    children: [
        {
            path: '/home',
            name: 'homePage',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        },
    
        {
            path: '/search',
            name: 'searchPage',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/search.vue'),
        },
        {
            path: '/setting',
            name: 'setPage',
            component: () => import(/* webpackChunkName: "user" */ '@/views/home/setting.vue'),
        }
    ]
};
