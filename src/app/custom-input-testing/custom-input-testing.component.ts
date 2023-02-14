import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input-testing',
  templateUrl: './custom-input-testing.component.html',
  styleUrls: ['./custom-input-testing.component.scss']
})
export class CustomInputTestingComponent implements OnInit {
  customInputForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = new FormGroup({
      email: new FormControl('',[<any>Validators.required]),
      firstName: new FormControl('', [<any>Validators.required]),
      lastName: new FormControl('', [<any>Validators.required]),
      phoneNumber: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required]),
  })
  this.customInputForm?.get("email")?.patchValue('address');
  this.customInputForm?.get("firstName")?.patchValue('kawthar');
  }

}
