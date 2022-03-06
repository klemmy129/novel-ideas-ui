import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { MainPageComponent } from "./core/page/main-page/main-page.component";
import { SettingsPageComponent } from "./core/page/settings-page/settings-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'setup', component: SettingsPageComponent },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
