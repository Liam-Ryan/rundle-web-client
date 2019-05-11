import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../services/post.service';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let mockPostService;
  let mockLocationService;


  beforeEach(async(() => {
    mockPostService = jasmine.createSpyObj(['createPost']);
    mockPostService.createPost.and.returnValue(of(null));
    mockLocationService = jasmine.createSpyObj(['back']);
    TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      imports: [ReactiveFormsModule,
        RouterTestingModule],
      providers: [
        {provide: PostService, useValue: mockPostService},
        {provide: Location, useValue: mockLocationService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have one tag field when loaded', () => {
    expect(component.tags.length).toBe(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('new tag should result in two tag fields', () => {
    component.tags[0] = 'tag-required-to-allow-adding';
    component.addTag();

    expect(component.tags.length).toBe(2);
  });

  it('removing only tag not allowed', () => {
    component.removeTag(0);

    expect(component.tags.length).toBe(1);
  });

  it('prevent post for invalid form', () => {
    component.addTag();
    component.submitPost();
    expect(component.validMessage).toBe('Please fill out the form before submitting!');
  });

  it('remove empty tags before creating post', () => {
    component.addTag();
    component.addTag();
    component.createPostForm.patchValue({description: 'description', title: 'title', content: 'content'});
    component.submitPost();

    expect(mockPostService.createPost).toHaveBeenCalledWith({
      title: 'title',
      description: 'description',
      content: 'content',
      category: '',
      tags: [],
      hidden: ''
    });
  });

  it('removing a tag after adding it should result in 1 tag', () => {
    component.tags[0] = 'tag-required-to-allow-adding';
    component.addTag();
    component.removeTag(1);

    expect(component.tags.length).toBe(1);
  });

  it('removing tags out of order should work', () => {
    component.tags[0] = 'tag-required-to-allow-adding';
    component.addTag();
    component.removeTag(0);

    expect(component.tags.length).toBe(1);
  });

  it('adding tag via inputbox works', () => {
    const select = fixture.debugElement.query(By.css('#create-post_tags input')).nativeElement;
    select.value = 'test-tag';
    select.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.tags.controls[0].value).toBe('test-tag');

  });

});
