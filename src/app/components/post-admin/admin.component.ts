import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { first } from 'rxjs/operators';
/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { IPost } from '../../interfaces/post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public posts: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .pipe(first())
      .subscribe(
        data => this.posts = data,
        err => console.error(err),
        () => console.log('posts loaded')
      );
  }

  deletePost(id: number) {
    this.postService.deletePost(id)
      .pipe(first())
      .subscribe(
        data => this.getPosts(),
        err => console.error(err),
        () => console.log('post deleted')
      );
  }

}
