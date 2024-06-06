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
// import UsersController from '#controllers/users_controller'

router.get('/', async ({ response }) => {
  response.redirect('/workspace')
})
router.get('/workspace', [HomeController, 'workspace'])
