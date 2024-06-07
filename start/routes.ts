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

function setupPageRoutes() {
  router.get('/', async ({ response }) => {
    response.redirect('/workspace')
  })
  router.get('/workspace', [HomeController, 'workspace'])

  router.get('sign_in', [UsersController, 'signIn'])
  router.get('sign_up', [UsersController, 'signUp'])
}

setupPageRoutes()
