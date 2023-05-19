import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'toReverse', pure:true
})
export class reverseStringPipe implements PipeTransform{
  
    transform(value: any) {
        //return value.reverseString();
           const resultArray= value.split(' ').reverse().join(' ');
           return resultArray;
      }
    
}