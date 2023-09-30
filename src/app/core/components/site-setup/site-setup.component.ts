import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-site-setup',
  templateUrl: './site-setup.component.html',
  styleUrls: ['./site-setup.component.scss']
})
export class SiteSetupComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  viewSetup() {
    let route = '/setup/';
    this.router.navigate([route]);

  }
}
