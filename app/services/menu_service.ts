export default class MenuService {
  async getMenu() {
    return [
      {
        title: 'Home',
        icon: 'home',
        route: 'home',
      },
      {
        title: 'Workspace',
        icon: 'folder',
        route: 'workspace',
      },
      {
        title: 'Settings',
        icon: 'settings',
        route: 'settings',
      },
    ]
  }
}
