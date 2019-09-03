import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryAdminRoutingModule } from './category-admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryAdminComponent } from './category-admin.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [CategoryAdminComponent],
  imports: [
    CommonModule,
    CategoryAdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CategoryAdminModule {}
