import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarComponent } from './app-navbar.component';
import { RundleButtonComponent } from '../rundle-button/rundle-button.component';
import { RundleIconButtonFaComponent } from '../rundle-icon-button-fa/rundle-icon-button-fa.component';
import { MaterialModule } from '../../shared/material.module';

describe('AppNavbarComponent', () => {
  let component: AppNavbarComponent;
  let fixture: ComponentFixture<AppNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppNavbarComponent,
        RundleButtonComponent,
        RundleIconButtonFaComponent
      ],
      imports: [
        MaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
