import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState } from "./app.global";
import { ThemeComponent } from './core/components/theme/theme.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SiteSetupComponent } from './core/components/site-setup/site-setup.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MainPageComponent } from './core/page/main-page/main-page.component';
import { SettingsPageComponent } from './core/page/settings-page/settings-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookService } from "./shared/services/book.service";
import { SearchComponent } from './core/components/search/search.component';
import { AppConfig } from "./app.config";
import { AddGenderComponent } from './features/components/add-gender/add-gender.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    FooterComponent,
    SiteSetupComponent,
    PageNotFoundComponent,
    MainPageComponent,
    SettingsPageComponent,
    SearchComponent,
    AddGenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AppConfig, AppState, BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
