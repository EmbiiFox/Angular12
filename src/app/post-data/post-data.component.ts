import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/https-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService:HttpServerService) { }

  public ngOnInit(): void {
    const payload={"body": "Nairubi thương cừu non","postId": 123};
    this.httpServerService.postComment(payload).subscribe(data => {
      console.log(
        'Post data',data
      )
    })
  }

}
