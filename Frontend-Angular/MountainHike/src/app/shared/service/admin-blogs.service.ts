import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../../pages/admin-panel/InterfaceBlogs';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogsService {
  //apiBlogs = 'http://localhost:3000/blogs';
  apiBlogs = 'http://localhost:8000/api/v1/Blogs/';

  constructor(private http:HttpClient) { }

  getBlogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(this.apiBlogs);
  }

  deleteBlog(id:any):Observable<any>{
    return this.http.delete(`${this.apiBlogs}/${id}`);
  }

  patchBlog(arr: Blogs, id:any):Observable<any>{
    console.log(arr, id)
    return this.http.patch(`${this.apiBlogs}/${id}`,arr)
  }

  postBlog(arr: Blogs):Observable<any>{
      return this.http.post(`${this.apiBlogs}`,arr)
  }

}
