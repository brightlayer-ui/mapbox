import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Theme } from './themes';

export const themeChange = new Subject();

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
    currentTheme: Theme;
    themes = Theme.getThemes();

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
        this.applyTheme(this.themes[0]);
    }

    toggleTheme() {
        let themeIndex = 0;
        for (let theme of this.themes) {
            themeIndex++;
            if (theme === this.currentTheme) {
                break;
            }
        }

        if (themeIndex === this.themes.length) {
            themeIndex = 0;
        }

        this.removeTheme(this.currentTheme);
        this.applyTheme(this.themes[themeIndex]);
    }

    private applyTheme(theme: Theme): void {
        this.renderer.addClass(document.body, theme.className);
        this.currentTheme = theme;
        themeChange.next(theme);
    }

    private removeTheme(theme: Theme): void {
        this.renderer.removeClass(document.body, theme.className);
        this.currentTheme = undefined;
    }
}
