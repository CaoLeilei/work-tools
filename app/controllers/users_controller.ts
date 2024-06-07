import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * 用户登录的界面控制器
   * @param param0
   * @returns
   */
  async signIn({ view }: HttpContext) {
    return view.render('sign_in')
  }
  async signUp({ view }: HttpContext) {
    return view.render('sign_up')
  }
}
