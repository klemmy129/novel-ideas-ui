import { Component, OnInit } from '@angular/core';
import { AppState } from "./app.global";
import { environment } from './../environments/environment';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  get novelIdeasUrl(): string {
    return <string>this._novelIdeasUrl;
  }

  set novelIdeasUrl(value: string) {
    this._novelIdeasUrl = value;
  }
  title = 'novel-ideas-ui';
  private _novelIdeasUrl: string | undefined;

   constructor(private route: ActivatedRoute, private router: Router, public global: AppState) {
   }


  ngOnInit(): void {
    let novelIdeasUrl = environment.novelIdeasUrl;
  }

  home() {
    let route = '/';
    this.router.navigate([route]);
  }
}
