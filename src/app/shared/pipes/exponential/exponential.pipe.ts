import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "exponential",
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exp: number = 1): any {
    return Math.pow(value, exp);
  }
}
