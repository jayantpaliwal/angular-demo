import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CounterService implements OnDestroy {
  private _counter$ = new BehaviorSubject<number>(0)

  counter$ = this._counter$.asObservable();

  increase(): void {
    this._counter$.next(this._counter$.getValue() + 1);
  }

  reset(): void {
    this._counter$.next(0);
  }

  ngOnDestroy(): void {
    this._counter$.next(0);
    this._counter$.complete();
  }
}