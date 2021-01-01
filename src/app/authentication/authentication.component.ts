import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../utils/constants';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  app_config : any ;
  constructor() {

    this.app_config = APP_CONFIG;
  }

  ngOnInit(): void {
  }

}
