import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menu(value: boolean) {
    console.log(value);
    if (value) {
      this.open = true;
    } else {
      this.open = false;
    }
  }

}
