import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public registerPosts = (param: any): Observable<any> => {
    const webApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(webApiUrl, param).pipe(
      catchError((e) => {
        console.log(e);
        return of(null);
      })
    );
  };
}
