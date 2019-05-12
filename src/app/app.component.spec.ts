import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { RundleButtonComponent } from './components/rundle-button/rundle-button.component';
import { RundleIconButtonFaComponent } from './components/rundle-icon-button-fa/rundle-icon-button-fa.component';
import { MaterialModule } from './shared/material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        AppNavbarComponent,
        RundleButtonComponent,
        RundleIconButtonFaComponent
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
