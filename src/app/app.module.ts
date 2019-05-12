/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { AdminComponent } from './components/admin/admin.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RundleButtonComponent } from './components/rundle-button/rundle-button.component';
import { RundleIconButtonFaComponent } from './components/rundle-icon-button-fa/rundle-icon-button-fa.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreatePostComponent,
    ViewPostComponent,
    CallbackComponent,
    AppNavbarComponent,
    HomeComponent,
    RundleButtonComponent,
    RundleIconButtonFaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
