import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackComponent } from './callback.component';
import { Router } from '@angular/router';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj(['navigate', 'navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [CallbackComponent],
      providers: [
        {provide: Router, useValue: mockRouter}
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigateByUrl if url in localstorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('http://testdomain.com');
    component.ngAfterViewChecked();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('http://testdomain.com');
  });

  it('navigate to view if url not in localstorage', () => {
    expect(mockRouter.navigate).toHaveBeenCalledWith(['post/view']);
  });

});
