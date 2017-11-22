import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'njCapitalize'
})
export class NjCapitalizePipe implements PipeTransform {
  public transform(value: string, args: any[]): string {
    if (value === null) {
      return null;
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
