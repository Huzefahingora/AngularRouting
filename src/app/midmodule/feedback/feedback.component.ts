import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  reactiveForm: FormGroup;
  formStatus;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      reqDetails: new FormGroup({
        name: new FormControl(null, [Validators.required, this.noSpace]),
        email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
        feedback: new FormControl(null, Validators.required)
      }),
      hobbies: new FormArray([]) // Initialize as an empty array
    });

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    });

    setTimeout(() => {
      this.reactiveForm.patchValue({
        reqDetails: {
          name: "huzefa"
        }
      });
    }, 1000);
  }

  addHobbie() {
    (<FormArray>this.reactiveForm.get('hobbies')).push(new FormControl(null));
  }

  onSubmit() {
    console.log(this.reactiveForm.value);

    setTimeout(() => {
      this.reactiveForm.reset({
        reqDetails: {
          name: "huzefa"
        },
        hobbies: []
      });
    }, 1000);
  }

  noSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpace: true };
    } else {
      return null;
    }
  }

  emailNotAllowed(control: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'huzefa@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
