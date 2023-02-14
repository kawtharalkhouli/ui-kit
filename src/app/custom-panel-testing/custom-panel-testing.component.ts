import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-panel-testing',
  templateUrl: './custom-panel-testing.component.html',
  styleUrls: ['./custom-panel-testing.component.scss']
})
export class CustomPanelTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('tab1Content',{read: TemplateRef}) content1!: TemplateRef<any>;
  @ViewChild('tab2Content',{read: TemplateRef}) content2!: TemplateRef<any>;
  @ViewChild('tab3Content',{read: TemplateRef}) content3!: TemplateRef<any>;

  panels=[
    {title:"Panel 1"},
    {title:"Panel 2"},
    {title:"Panel 3"}
  ]

}
