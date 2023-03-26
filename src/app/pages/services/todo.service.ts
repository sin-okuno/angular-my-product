import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TodoDto } from '../models/dtos/responses/todo-dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public getTodoList = (): Observable<TodoDto[]> => {
    const webApiUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<TodoDto[]>(webApiUrl).pipe(
      catchError(() => {
        return of(null as TodoDto[]);
      })
    );
  };
}
