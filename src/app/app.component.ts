import {Component, OnInit} from '@angular/core';
import {APP_CONFIG} from './utils/constants';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  app_config : any ;
  constructor() {

    this.app_config = APP_CONFIG;
  }

  showalert() {


  }
  ngOnInit(): void {
    this.showalert();
  }
}
