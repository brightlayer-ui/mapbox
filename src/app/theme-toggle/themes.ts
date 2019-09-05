
export class Theme {
  constructor(public className: string, public themeName: string) {}

  static blueTheme =
    new Theme('pxb-blue', 'Blue Theme');

  static darkBlueTheme =
    new Theme('pxb-blue-dark', 'Blue Dark Theme');

  static getThemes(): Theme[] {
    return [Theme.blueTheme, Theme.darkBlueTheme];
  }
}
