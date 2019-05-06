/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostCategories } from '../../interfaces/post-category';
import { Post } from '../../interfaces/post';
import { first } from 'rxjs/internal/operators/first';
import { throwError } from 'rxjs';

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
  categories: string[];
  validMessage = '';

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl(''),
      tags: new FormArray([new FormControl('')]),
      hidden: new FormControl('')
    });
    this.categories = PostCategories;
  }

  submitPost() {
    this.validMessage = '';
    if (!this.createPostForm.valid) {
      this.validMessage = 'Please fill out the form before submitting!';
      return;
    }
    const post = this.createPostForm.value as Post;
    console.log(`Post as created by form - \n${JSON.stringify(post)}`);
    const today = new Date();
    post.lastEditedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    console.log(`Post after modification in submitPost - \n${JSON.stringify(post)}`);
    this.postService.createPost(post)
      .pipe(first())
      .subscribe(
        data => {
          this.createPostForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
  }

  addTag() {
    this.tags.push(new FormControl(''));
  }

  removeTag(tagIndex: number) {
    this.tags.removeAt(tagIndex);
  }

}
