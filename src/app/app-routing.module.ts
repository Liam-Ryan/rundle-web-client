/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
  {
    path: 'post/view/:id',
    loadChildren: './components/view-post/view-post.module#ViewPostModule',
  },
  {
    path: 'post/view',
    loadChildren: './components/admin/admin.module#AdminModule',
  },
  {
    path: 'post/create',
    loadChildren: './components/create-post/create-post.module#CreatePostModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'callback',
    loadChildren: './components/callback/callback.module#CallbackModule',
  },
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
