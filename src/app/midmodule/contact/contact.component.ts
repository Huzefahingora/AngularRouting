import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CanDeactivateGuardService } from '../../shared/Services/deactivate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  country: string;
  genderD: string;
  subject: string;
  defaultGender: string = 'Male';
  gender = [
    { id: 1, value: "Male" },
    { id: 2, value: "Female" },
  ];

  constructor(private router: Router, private canDeactivateGuard: CanDeactivateGuardService) { }

  ngOnInit(): void {
  }

  canExit() {
    const hasUnsavedChanges = this.firstName.trim() !== '' ||
      this.lastName.trim() !== '' ||
      this.country.trim() !== '' ||
      this.subject.trim() !== '';

    if (hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you want to discard them?');
    } else {
      return true;
    }
  }

  @ViewChild('contactForm', { static: false })
  form: NgForm;

  formSubmit() {
    this.firstName = this.form.value.personalDetail.firstname;

    this.lastName = this.form.value.personalDetail.lastname;
    this.country = this.form.value.country;
    this.email = this.form.value.personalDetail.email;
    this.subject = this.form.value.subject;
    this.genderD = this.form.value.gender;
    this.form.reset();
  }
}
