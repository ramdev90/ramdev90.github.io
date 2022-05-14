import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-search-control',
  templateUrl: './custom-search-control.component.html',
  styleUrls: ['./custom-search-control.component.css']
})
export class CustomSearchControlComponent implements OnInit {

  //temp
  touchedState: true;
  invalidState: true;
  //

  @Input() placeholder = 'Search';
  value: ''

  constructor() { }

  ngOnInit(): void {
  }

  checkEventType(a: any, b: any) { }
  onToched() { }

}
