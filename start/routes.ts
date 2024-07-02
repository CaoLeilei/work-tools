/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', async ({ response }) => {
  response.redirect('/workspace')
})

// 用户登录注册相关的页面的路由
router.group(() => {
  router.get('sign_in', [UsersController, 'signIn'])
  router.get('sign_up', [UsersController, 'signUp'])
})

router.group(() => {
  router.get('/workspace', [HomeController, 'workspace'])
  router.get('/workspace/:id', [HomeController, 'workspace'])
})
