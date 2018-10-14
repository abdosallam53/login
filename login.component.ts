import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object;

  constructor(private interlink: InterlinkService, private _router: Router) { 
    this.user = {name: ''};
  }

  // registration and login routes
  register() {
    // console.log("registering from component"); //step 1
    // this.interlink.register(this.user); //step 2
    this.interlink.register(this.user, (res) => { // ?
      if (res === 'success') {
        // console.log("success!!!");
        this._router.navigate(['dashboard']); // if registration is succesful, navigate to dashboard
      }
      // console.log("back in component");
    });
  }
  login() {
    this.interlink.login(this.user, (res) => {
      if (res === 'success') {
        console.log('success at login!!!');
        this._router.navigate(['dashboard']);
      } else {
        console.log('user not found');
      }
    });
  }

  ngOnInit() {
  }


}
