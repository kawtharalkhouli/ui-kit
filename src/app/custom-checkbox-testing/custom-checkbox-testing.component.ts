import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox-testing',
  templateUrl: './custom-checkbox-testing.component.html',
  styleUrls: ['./custom-checkbox-testing.component.scss']
})
export class CustomCheckboxTestingComponent implements OnInit {

  constructor() { }
  disabled=true;
  ngOnInit(): void {
    setTimeout(()=>{this.disabled=!this.disabled},5000)
  }

}
