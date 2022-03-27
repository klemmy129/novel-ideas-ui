import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageComponent } from './settings-page.component';
import { AppState } from "../../../app.global";
import { BookService } from "../../../shared/services/book.service";
import { HttpClient } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppConfig } from "../../../app.config";

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;
  let httpClient: HttpClient;
  let appState: AppState;
  let appConfig: AppConfig;
  let service: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [SettingsPageComponent],
      providers: [AppState, BookService,{provide: AppConfig, appConfig: AppConfig}]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    appConfig = TestBed.inject(AppConfig);
    appState = TestBed.inject(AppState);
    service = TestBed.inject(BookService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
