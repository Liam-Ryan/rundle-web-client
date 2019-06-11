/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPost } from '../interfaces/post.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICategory } from '../interfaces/category.model';


const baseUrl = environment.serverBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  private createTokenOptions() {
    return {headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)};
  }

  getCategories() {
    return this.http.get<ICategory[]>(`${baseUrl}/api/v1/category`, this.createTokenOptions());
  }

  getCategory(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${baseUrl}/api/v1/category/${id}`, this.createTokenOptions());
  }

  createCategory(category: ICategory) {
    const options = this.createTokenOptions();
    options.headers = options.headers.append('Content-Type', 'application/json');
    return this.http.post(`${baseUrl}/api/v1/category`, JSON.stringify(category), options);
  }

  deleteCategory(id: number) {
    return this.http.delete<ICategory>(`${baseUrl}/api/v1/category/${id}`, this.createTokenOptions());
  }
}
