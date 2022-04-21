import { Component, OnInit } from '@angular/core';
import { catchError, combineLatest, forkJoin, mergeMap, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { ListApiService } from '../../services/list-api.service';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  perPage: number = 2;
  lastLoadedPage: number = 1;
  users: IUser[] = [];
  constructor(public listApiService: ListApiService) { }

  ngOnInit() {
    this.getList(this.lastLoadedPage);
  }

  getList(id: number): void {
    this.listApiService.getUser(this.lastLoadedPage).pipe(catchError(err => {
      return of(err);
    })).subscribe((user) => {
      this.addUser(user);
      this.lastLoadedPage++;
    });
  }

  loadMore(): void {
    // it call the api one after one
    this.listApiService.getUser(this.lastLoadedPage)
      .pipe(mergeMap((user1) => {
        this.addUser(user1);
        this.lastLoadedPage++;
        return this.listApiService.getUser(this.lastLoadedPage).pipe(catchError(err => {
          return of();
        }))
      }), catchError(err => {
        return of();
      })).subscribe((user2) => {
        this.addUser(user2);
        this.lastLoadedPage++;
      })
  }

  clear(): void {
    this.users = [];
    this.lastLoadedPage = 1;
  }

  // deep clone is mandatory
  private addUser(user: IUser): void {
    this.users = this.deepClone(this.users);
    this.users.push(user);
  }

  private deepClone = <T>(object: T): T => JSON.parse(JSON.stringify(object));
}
