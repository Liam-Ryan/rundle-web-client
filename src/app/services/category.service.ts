/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.model';

@Injectable({
  providedIn: 'root'
})

// @todo cache categories in behaviour subject, return observables to consumers
export class CategoryService {

  private serviceEndpoint = 'category';

  constructor(private api: ApiService) {
  }

  getCategories() {
    return this.api.get<ICategory[]>(this.serviceEndpoint);
  }

  getCategory(id: number): Observable<ICategory> {
    return this.api.get<ICategory>(this.serviceEndpoint, id);
  }

  createCategory(category: ICategory) {
    return this.api.create<ICategory>(this.serviceEndpoint, category);
  }

  deleteCategory(id: number) {
    return this.api.delete<ICategory>(this.serviceEndpoint, id);
  }
}
