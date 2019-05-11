import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post.model';
import { first } from 'rxjs/internal/operators/first';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  public post: IPost;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPost(this.route.snapshot.params.id);
  }

  getPost(id: number) {
    this.postService.getPost(id)
      .pipe(first())
      .subscribe(
        post => this.post = post,
        error => console.error(error),
        () => console.log('Completed')
      );
  }

}
