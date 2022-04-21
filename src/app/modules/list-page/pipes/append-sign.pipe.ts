import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendSign',
  pure: false,
})
export class AppendSignPipe implements PipeTransform {
  transform(value: any, sign: string): any {
    return `${sign}${value}`;
  }
}
