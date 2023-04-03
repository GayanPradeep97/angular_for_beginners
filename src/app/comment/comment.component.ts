import { Component, OnInit} from '@angular/core';
import { CommentService } from './comment.service';
import { comments } from './comment';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { pluck } from 'rxjs/internal/operators/pluck';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{

  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  comments : comments[] = [];

  constructor(private commentService: CommentService,
  private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(data => {
        this.comments = data['comments'];
      })
      }};


 