import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class WorkspacesController {
  // constructor(private readonly workspaceService: WorkspaceService) {}
  async index({ view }: HttpContext) {
    return view.render('workspaces/index')
  }
  async projects({ view }: HttpContext) {
    return view.render('workspaces/projects')
  }

  async projectItems({ view }: HttpContext) {
    const projectInfo = {}
    return view.render('workspaces/project_items', projectInfo)
  }
}
