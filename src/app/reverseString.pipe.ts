import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'toReverse', pure:true
})
export class reverseStringPipe implements PipeTransform{
  
    transform(value: any) {
        //return value.reverseString();
       // return value.split(' ').reverse().join();
       
       const result=[];
      if(value.length===0){
        return value;
      }
     for(let  i=value.length;i>=0;i--){
      result.push(value[i]);
            }
      return result.join('');
     }
    
}