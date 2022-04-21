import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterService],
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.counter$ = this.counterService.counter$;
  }

  ngOnInit() {}

  onClicked(): void {
    this.counterService.increase();
  }

  onReset(): void {
    this.counterService.reset();
  }
}
