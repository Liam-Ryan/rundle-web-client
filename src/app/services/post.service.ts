/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
// @todo cache posts in behaviour subject, return observables to consumers
export class PostService {

  private serviceEndpoint = 'posts';

  constructor(private api: ApiService) {
  }

  getPosts() {
    return this.api.get<IPost[]>(this.serviceEndpoint);
  }

  getPost(id: number): Observable<IPost> {
    return this.api.get<IPost>(this.serviceEndpoint, id);
  }

  createPost(post: IPost) {
    return this.api.create<IPost>(this.serviceEndpoint, post);
  }

  deletePost(id: number) {
    return this.api.delete<IPost>(this.serviceEndpoint, id);
  }
}
