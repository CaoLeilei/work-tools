import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async workspace({ view }) {
    return view.render('workspace')
  }
}
