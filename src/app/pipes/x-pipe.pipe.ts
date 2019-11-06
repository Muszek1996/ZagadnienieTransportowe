import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xPipe'
})
export class XPipePipe implements PipeTransform {

  transform(value: number): any {
    if (!value) { return 'X'; }
    return value;
  }

}
