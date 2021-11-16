export class Theme {
    constructor(public className: string, public themeName: string) {}

    static blueTheme = new Theme('blui-blue', 'Default Theme');

    static darkBlueTheme = new Theme('blui-blue-dark', 'Dark Theme');

    static getThemes(): Theme[] {
        return [Theme.blueTheme, Theme.darkBlueTheme];
    }
}
