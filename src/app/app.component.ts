import { Component } from '@angular/core';
import {APP_CONFIG} from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app_config : any ;
  constructor() {

    this.app_config = APP_CONFIG;
  }
}
