import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RundleIconButtonFaComponent } from './rundle-icon-button-fa.component';

describe('RundleIconButtonComponent', () => {
  let component: RundleIconButtonFaComponent;
  let fixture: ComponentFixture<RundleIconButtonFaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RundleIconButtonFaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RundleIconButtonFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
