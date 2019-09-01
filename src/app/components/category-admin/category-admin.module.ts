import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryAdminComponent } from './category-admin.component';

@NgModule({
  declarations: [CategoryAdminComponent],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryAdminModule {}
