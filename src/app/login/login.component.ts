import { Component, OnInit } from '@angular/core';
import { SocialserviceService } from '../socialservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SocialserviceService) { }
  user;
  ngOnInit() {
    this.service.user$.subscribe( user => {
      console.log("User : " + user);
      this.user=user;
    })
  }

  login(){
    this.service.login();
  }

  logout(){
    this.service.logout();

    console.log("Logout Successfull");
  }

  fblogin(){
    this.service.fblogin();
  }



}
