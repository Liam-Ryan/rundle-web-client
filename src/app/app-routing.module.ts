/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
  {
    path: 'post/view/:id',
    component: ViewPostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'post/view',
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'post/create',
    component: CreatePostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
