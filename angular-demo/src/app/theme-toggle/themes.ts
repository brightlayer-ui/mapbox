export class Theme {
    constructor(public className: string, public themeName: string) {}

    static blueTheme = new Theme('pxb-blue', 'Default Theme');

    static darkBlueTheme = new Theme('pxb-blue-dark', 'Dark Theme');

    static getThemes(): Theme[] {
        return [Theme.blueTheme, Theme.darkBlueTheme];
    }
}
