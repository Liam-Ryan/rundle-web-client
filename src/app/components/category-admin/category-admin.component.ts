import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category.model';
import { CategoryService } from '../../services/category.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  public categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().pipe(take(1)).subscribe(
      (categories) => this.categories = categories
    );
  }

}
