import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
export declare var $;
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onGoClick(){
    this.router.navigateByUrl("auth/reset");
  }
}
