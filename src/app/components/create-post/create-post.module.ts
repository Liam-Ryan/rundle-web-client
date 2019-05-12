import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './create-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    CreatePostRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreatePostModule {}
