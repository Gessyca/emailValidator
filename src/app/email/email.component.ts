import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      email: [null, Validators.compose([this.customEmailValidator])],
    });
  }

  private customEmailValidator(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return null;
    }

    return Validators.email(control);
  }
  enviar(){
    window.confirm();
  }

}
