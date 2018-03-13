export default [{
  path: '/test',
  name:'test',
  component: () =>
    import ('@/views/test/test'),
  meta: {
    title: 'test',
    requiresAuth: true, //控制登录
  }
}, {
  path: '/broadcast',
  name:'broadcast',
  component: () =>
    import ('@/views/broadcast/broadcast'),
  meta: {
    title: 'broadcast',
    requiresAuth: true, //控制登录
  }
}]
