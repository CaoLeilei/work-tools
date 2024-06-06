import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async workspace({ view }) {
    console.log('HomeController')
    return view.render('workspace')
  }
}
