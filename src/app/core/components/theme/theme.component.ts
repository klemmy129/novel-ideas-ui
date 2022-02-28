import { Component, OnInit } from '@angular/core';
import { AppState } from "../../../app.global";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themes: Array<{ title: string, theme: string }>;

  constructor(public global: AppState) {
    this.themes = [
      {title: 'Default', theme: 'default'},
      {title: 'Darkly', theme: 'darkly'},
      {title: 'Cerulean', theme: 'cerulean'},
      {title: 'Flatly', theme: 'flatly'},
      {title: 'Slate', theme: 'slate'},
      {title: 'Solar', theme: 'solar'},
    ];
  }

  ngOnInit(): void {
    this.changeTheme('flatly');
  }

  changeTheme(theme: any) {
    console.log("Now Changing theme to " + theme);
    this.global.set('theme', theme);
  }

}
