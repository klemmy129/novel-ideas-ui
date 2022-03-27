import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponent } from './theme.component';
import { AppState } from "../../../app.global";

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;
  let appState: AppState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeComponent ],
      providers: [AppState]
    })
    .compileComponents();
    appState = TestBed.inject(AppState);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
