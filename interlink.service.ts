import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {

  constructor(private _http: HttpClient) { 

  }

  //login and registration routes
  register(user, cb){
    console.log("registering from service"); //step 3
    // this._http.post('/registerUser', user) //step 4
    this._http.post('/registerUser', user).subscribe((res)=> {
      cb(res)
    })
  }
  login(user, cb){
    this._http.post('/loginUser', user).subscribe((res)=> {
      cb(res)
    })
  }

}