import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { first } from 'rxjs/internal/operators/first';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  public post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBike(this.route.snapshot.params.id);
  }

  getBike(id: number) {
    this.postService.getPost(id)
      .pipe(first())
      .subscribe(
        bike => this.post = bike,
        error => console.error(error),
        () => console.log('Completed')
      );
  }

}
