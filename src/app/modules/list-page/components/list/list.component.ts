import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() users: IUser[] = [];

  trackByUser(id: number, user: IUser): number {
    return user.id;
  }
}
