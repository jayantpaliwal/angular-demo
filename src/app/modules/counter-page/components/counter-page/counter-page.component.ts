import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
})
export class CounterPageComponent implements OnInit, OnDestroy {
  totalCounter$: Observable<number>;

  @ViewChildren(CounterComponent)
  counterComponents: QueryList<CounterComponent>;

  private destroy$ = new Subject();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const counters$ = this.counterComponents.map((c) => c.counter$);
    this.totalCounter$ = combineLatest([...counters$]).pipe(
      map((res) =>
        res.reduce((acc, counter) => {
          return acc + counter;
        }, 0)
      )
    );
    // add changeDetector for detecting the Expression change
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
