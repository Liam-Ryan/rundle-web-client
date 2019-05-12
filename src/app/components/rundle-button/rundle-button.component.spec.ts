import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RundleButtonComponent } from './rundle-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RundleButtonComponent', () => {
  let component: RundleButtonComponent;
  let fixture: ComponentFixture<RundleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RundleButtonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RundleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
