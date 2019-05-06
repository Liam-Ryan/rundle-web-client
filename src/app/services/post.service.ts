/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  private createTokenOptions() {
    return {headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)};
  }

  getPosts() {
    return this.http.get<Post[]>('/server/api/v1/posts', this.createTokenOptions());
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`/server/api/v1/posts/${id}`, this.createTokenOptions());
  }

  createPost(post: Post) {
    const options = this.createTokenOptions();
    options.headers = options.headers.append('Content-Type', 'application/json');
    return this.http.post('/server/api/v1/posts', JSON.stringify(post), options);
  }

  deletePost(id: number) {
    return this.http.delete<Post>(`/server/api/v1/posts/${id}`, this.createTokenOptions());
  }
}
