/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostComponent } from './view-post.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Directive, HostListener, Input } from '@angular/core';
import { By } from '@angular/platform-browser';


@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {

  @Input('routerLink') linkParams: any;
  public navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('ViewPostComponent', () => {
  let component: ViewPostComponent;
  let fixture: ComponentFixture<ViewPostComponent>;

  const mockRoute = {
    snapshot: {
      params: {
        id: 1
      }
    }
  };
  const fakePost = {
    id: 1,
    description: 'testpost1',
    title: 'Post 1',
    content: 'Test post content',
    isHidden: false,
    tags: ['tag1'],
    lastEditedDate: '2018-03-05',
    category: 'Test Category'
  };

  let mockPostService;

  beforeEach(async(() => {
    mockPostService = jasmine.createSpyObj(['getPost']);
    mockPostService.getPost.and.returnValue(of(fakePost));
    TestBed.configureTestingModule({
      declarations: [
        ViewPostComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        {provide: ActivatedRoute, useValue: mockRoute},
        {provide: PostService, useValue: mockPostService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPost with correct id', () => {
    expect(mockPostService.getPost).toHaveBeenCalledWith(1);
  });

  it( 'clicking on back should go back to view', () => {
    const anchor = fixture.debugElement.query(By.css('.link-back>a'));
    anchor.triggerEventHandler('click', null);
    const mockRouterLink = fixture.debugElement.query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);
    expect(mockRouterLink.navigatedTo).toBe('/post/view');
  });
});
