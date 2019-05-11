/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post.model';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';
import { Directive, HostListener, Input } from '@angular/core';

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

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockPostService;
  const postData: IPost[] = [
    {
      id: 1,
      description: 'testpost1',
      title: 'Post 1',
      content: 'Test post content',
      isHidden: false,
      tags: ['tag1'],
      lastEditedDate: '2018-03-05',
      category: 'Test Category'
    },
    {
      id: 2,
      description: 'testpost2',
      title: 'Post 2',
      content: 'Test post 2 content',
      isHidden: false,
      tags: ['tag1', 'tag2'],
      lastEditedDate: '2019-05-08',
      category: 'Test Category'
    }
  ];

  beforeEach(async(() => {
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    mockPostService.getPosts.and.returnValue(of(postData));
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        RouterLinkDirectiveStub
      ],
      imports: [],
      providers: [
        {provide: PostService, useValue: mockPostService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('posts should be retrieved oninit', () => {
    expect(component.posts.length).toBe(2);
  });

  it('posts should be displayed in DOM', () => {
    expect(fixture.debugElement.queryAll(By.css('tr>td:first-child')).length).toBe(2);
  });

  it('clicking on a post should attempt to load view', () => {
    const routerLinkTd = fixture.debugElement.query(By.css('tr>td:first-child'));
    const routerLink = routerLinkTd.query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);
    routerLinkTd.query(By.css('a')).triggerEventHandler('click', null);

    expect(routerLink.navigatedTo).toBe('/post/view/1');
  });

  it('clicking on delete will call to delete the post', () => {
    const anchor = fixture.debugElement.query(By.css('tr>td:last-child>a'));
    anchor.triggerEventHandler('click', null);

    expect(mockPostService.deletePost).toHaveBeenCalledWith(1);
  });
});
