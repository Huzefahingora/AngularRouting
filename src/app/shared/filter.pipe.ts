import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../bottommodule/pipe/student';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string) {
    if (!students || !filterText) {
      return students; // Return the original array if students or filterText is falsy
    } else {
      return students.filter((student) =>
        student.gender.toLowerCase() === filterText.toLowerCase()
      );
    }
  }
}
