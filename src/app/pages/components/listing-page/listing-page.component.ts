import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/core/services/loading.service';
import { TodoDto } from '../../models/dtos/responses/todo-dto';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent {
  /**
   * Todoリスト
   */
  resultsLength: number;
  dataSource: MatTableDataSource<TodoDto>;

  /** Material table's header */
  displayedColumns: string[] = ['id', 'userId', 'title'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialPageSize = 10;

  constructor(private todoService: TodoService, public loadingService: LoadingService) {
    this.dataSource = new MatTableDataSource<TodoDto>([]);
  }

  onClickSearch(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.loadingService.SetIsLoading(true);
          return this.todoService.getTodoList();
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.loadingService.SetIsLoading(false);
          this.resultsLength = data.length;
          return data;
        })
      )
      .subscribe((data) => {
        console.log('1');
        this.dataSource = new MatTableDataSource<TodoDto>(data);
        console.log('2');
        this.dataSource.paginator = this.paginator;
        console.log('3');
      });
  }
}
