import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // Step 0 -> import ReactiveFormsModule in your module
  // Step 1 -> Create FormGroup -> list of form fields
  // Step 2 -> Import FormBuilder -> using DI
  // Step 3 -> defining actual form fields and validations
  // Step 4 -> Form tag in HTML [formGroup] to be assigned
  // Step 5 -> providing formControlName to fields
  // Step 6 -> Form tag in HTML (ngSubmit) to be assigned
  // Step 7 -> Handeling validations

  newUserFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.newUserFormGroup = formBuilder.group({
      newUserName: new FormControl('', [Validators.required]),
      newUserEmail: new FormControl('', [Validators.email, Validators.required]),
      newUserWebsite: new FormControl('', [Validators.required]),
      newUserCity: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }


  FormSubmitEvent(): void {
    console.log(this.newUserFormGroup);
    if (this.newUserFormGroup.valid) {
      alert('form is valid');
      // Make ajax call
    } else {
      alert('form is not valid');
    }
  }

}
