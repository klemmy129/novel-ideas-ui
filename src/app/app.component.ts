import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from './app.global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Novel Ideas';

   constructor(private route: ActivatedRoute, private router: Router, public global: AppState) {
   }

  home() {
    let route = '/';
    this.router.navigate([route]);
  }
}
