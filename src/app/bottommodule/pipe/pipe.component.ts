import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from '../../shared/Services/student.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  providers : [StudentService]
})
export class PipeComponent implements OnInit {

  constructor(private studentService : StudentService) { }
  students :any;
  totalMarks : number;
  _filterText : string;
  filterStudent : Student[];

  get filterText(){
    return this._filterText;
  }

  set filterText(value : string){
    this._filterText = value;
    this.filterStudent = this.filterStudentByGender(value)
  }
  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filterStudent = this.students;
  }
  addStudent(){
    this.students.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'})
  }
    filterStudentByGender(filterType : string){
      if (!this.students || !this.filterText) {
        return this.students; // Return the original array if students or filterText is falsy
      } else {
        return this.students.filter((student) =>
          student.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
          student.gender.toLowerCase() === filterType.toLowerCase() ||
          student.course.toLowerCase().includes(this.filterText.toLowerCase())
          // student.marks == ///////??parseInt(this.filterText)
          );
      }
    }


}
