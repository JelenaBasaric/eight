import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'toReverse', pure:true
})
export class reverseStringPipe implements PipeTransform{
  
    transform(value: any) {
        //return value.reverseString();
              return value.split(' ').reverse().join(' ');
      }
    
}