export class Theme {
    constructor(public className: string, public themeName: string) {}

    static blueTheme = new Theme('brightlayer-ui-blue', 'Default Theme');

    static darkBlueTheme = new Theme('brightlayer-ui-blue-dark', 'Dark Theme');

    static getThemes(): Theme[] {
        return [Theme.blueTheme, Theme.darkBlueTheme];
    }
}
