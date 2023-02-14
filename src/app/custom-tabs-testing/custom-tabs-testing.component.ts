import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-tabs-testing',
  templateUrl: './custom-tabs-testing.component.html',
  styleUrls: ['./custom-tabs-testing.component.scss']
})
export class CustomTabsTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('tab1Content',{read: TemplateRef}) content1!: TemplateRef<any>;
  @ViewChild('tab2Content',{read: TemplateRef}) content2!: TemplateRef<any>;
  @ViewChild('tab3Content',{read: TemplateRef}) content3!: TemplateRef<any>;

  tabs=[
    {label:"Tab 1"},
    {label:"Tab 2"},
    {label:"Tab 3"}
  ]

}
