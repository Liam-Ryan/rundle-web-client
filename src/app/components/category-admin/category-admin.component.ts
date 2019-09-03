import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category.model';
import { CategoryService } from '../../services/category.service';
import { take } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  public categories: ICategory[] = [];

  constructor(private categoryService: CategoryService,
              private postService: PostService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().pipe(take(1)).subscribe(
      (categories) => this.categories = categories
    );
  }

  addCategory() {
    console.log('add category modal');
  }

  drop(event: CdkDragDrop<ICategory>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.posts, event.previousIndex, event.currentIndex);
    } else {
      const oldCategory = event.previousContainer.data;
      const newCategory = event.container.data;

      this.postService.createOrModifyPost({...oldCategory.posts[event.previousIndex], category: newCategory})
        .pipe(take(1))
        .subscribe(() => {
            transferArrayItem(oldCategory.posts, newCategory.posts, event.previousIndex, event.currentIndex);
          },
          response => console.error(response && response.error && response.error.error));
    }
  }

}
