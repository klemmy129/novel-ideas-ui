import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { AppState } from "../../../app.global";
import { AppConfig } from "../../../app.config";
import { HttpClient } from "@angular/common/http";
import { BookService } from "../../../shared/services/book.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let appState: AppState;
  let appConfig: AppConfig;
  let service: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MainPageComponent ],
      providers: [AppState, BookService,{provide: AppConfig, appConfig: AppConfig}]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    appState = TestBed.inject(AppState);
    appConfig = TestBed.inject(AppConfig);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
