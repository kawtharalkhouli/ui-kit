import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-text-area-testing',
  templateUrl: './custom-text-area-testing.component.html',
  styleUrls: ['./custom-text-area-testing.component.scss']
})
export class CustomTextAreaTestingComponent implements OnInit {
  disabled:boolean=true
  ngOnInit(): void {
    this.createTestForm();
    setTimeout(() => {
      this.disabled=false
    }, 5000)
    this.testForm.get('test')?.patchValue('Previously Written Text')
  }

  testForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  createTestForm() {
    this.testForm = this.fb.group({
      test: this.fb.control('', [Validators.required]),
    });
    return this.testForm;
  }
}
