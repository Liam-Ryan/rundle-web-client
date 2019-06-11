/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/post.model';
import { first } from 'rxjs/internal/operators/first';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../interfaces/category.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  get tags(): FormArray {
    return this.createPostForm.get('tags') as FormArray;
  }

  createPostForm: FormGroup;
  categories: ICategory[];
  validMessage = '';

  constructor(private postService: PostService,
              private router: Router,
              private location: Location,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      tags: new FormArray([new FormControl('')]),
      hidden: new FormControl('')
    });

    this.categoryService.getCategories().pipe(
      take(1)
    ).subscribe(data => {
      this.categories = data;
      this.createPostForm.controls.category.setValue(this.categories[0], {onlySelf: true});
    });
  }

  submitPost() {
    this.validMessage = '';
    if (!this.createPostForm.valid) {
      this.validMessage = 'Please fill out the form before submitting!';
      return;
    }
    const post = this.createPostForm.value as IPost;
    post.tags = post.tags.filter(tag => tag.trim());
    this.postService.createPost(post)
      .pipe(first())
      .subscribe(
        data => {
          this.createPostForm.reset();
          this.router.navigate(['post/view']);
        },
        error => {
          return throwError(error);
        }
      );
  }

  cancel() {
    this.location.back();
  }

  addTag() {
    this.tags.push(new FormControl(''));
  }

  removeTag(tagIndex: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(tagIndex);
    }
  }

}
