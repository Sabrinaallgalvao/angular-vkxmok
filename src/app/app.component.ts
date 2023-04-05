import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = " Angular " + VERSION.major;

  option ="0";

  constructor(){}
  ngOnInit(){}

}