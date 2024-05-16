import { Pipe ,PipeTransform } from "@angular/core";
@Pipe({
    name : 'result'
})
export class ResultPipe implements PipeTransform{
    transform(value: any) {
        if(value/6 > 34)
            {
                return "pass";
            }
            else {
                return "fail"
            }
    }
}