import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var a = args[0];
    return Math.pow(value, 3);
  }
}
