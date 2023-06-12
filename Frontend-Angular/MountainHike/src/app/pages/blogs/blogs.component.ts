import { Component, OnInit } from '@angular/core';
import { AdminBlogsService } from 'src/app/shared/service/admin-blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blog:AdminBlogsService) 
  {
    this.blog.getBlogs().subscribe({
      next: (blogsData: any[])=>{
        this.blogs=blogsData
      },
      error:(errorData: any)=>{
        console.error(errorData)
      }
    })
  }

  blogs:Array<any>=[]

  ngOnInit(): void {
  }

}
