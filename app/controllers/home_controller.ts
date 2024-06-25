import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async workspace({ view }: HttpContext) {
    return view.render('workspace', {})
  }
}
