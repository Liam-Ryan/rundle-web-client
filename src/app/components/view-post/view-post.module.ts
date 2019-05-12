import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPostRoutingModule } from './view-post-routing.module';
import { ViewPostComponent } from './view-post.component';

@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    ViewPostRoutingModule
  ]
})
export class ViewPostModule {}
