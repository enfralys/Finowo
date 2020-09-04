import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toNecesito(){
    document.getElementById("necesito").scrollIntoView({behavior: "smooth"});
  }

  toPasos(){
    document.getElementById("pasos").scrollIntoView({behavior: "smooth"})
  }

}
