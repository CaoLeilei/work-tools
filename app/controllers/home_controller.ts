import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import MenuService from '#services/menu_service'

@inject()
export default class HomeController {
  constructor(protected menuService: MenuService) {}

  async workspace(ctx: HttpContext) {
    console.log(this.menuService.getMenu())
    const { view } = ctx
    return view.render('workspace', {})
  }
}
