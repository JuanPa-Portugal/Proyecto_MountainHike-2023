import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserProfile } from './user-profile';


@Injectable({
  providedIn: 'root'
})
export class UserPanelService {

  constructor(private http: HttpClient) { }

  getUserProfile(userId: string|null): Observable<UserProfile> {
    return this.http.get<UserProfile>(`http://127.0.0.1:8000/api/v1/Users/${userId}/`);
  }
}
