import { APP_CONFIG } from './../utils/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public app_config : any ;
  constructor() {
    this.app_config = APP_CONFIG;
  }
  ngOnInit(): void {
  }

}
