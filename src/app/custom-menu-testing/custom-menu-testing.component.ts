import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-menu-testing',
  templateUrl: './custom-menu-testing.component.html',
  styleUrls: ['./custom-menu-testing.component.scss']
})
export class CustomMenuTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuListItems: any[] =[
    {menuLinkText: 'Add', isDisabled: false , menuIcon: 'add'},
    {menuLinkText: 'Edit', isDisabled: false , menuIcon: 'edit'},
    {menuLinkText: 'Add', isDisabled: false , menuIcon: 'delete'},
  ]
  menuListItemss: any[] =[
    {menuLinkText: 'Add', isDisabled: true , menuIcon: 'add'},
    {menuLinkText: 'Edit', isDisabled: true , menuIcon: 'edit'},
    {menuLinkText: 'Add', isDisabled: false , menuIcon: 'delete'},
  ]
  menuListItemsWithNoIcons: any[] =[
    {menuLinkText: 'Add', isDisabled: false},
    {menuLinkText: 'Edit', isDisabled: false},
    {menuLinkText: 'Add', isDisabled: false},
  ]
  onClick(e:any){
  console.log(e)
  }

}
