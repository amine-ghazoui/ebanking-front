import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;
  roles : any;
  username : any;
  accesToken! : string;

  constructor(private http : HttpClient) { }

  login(username : string, password : string){

    let options = {
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }

    let params = new HttpParams().set("username", username).set("password", password);
    return this.http.post("http://localhost:8085/auth/login", params, options)
  }

  loadProfile(data : any){
    this.isAuthenticated = true;
    this.accesToken = data['access-token'];
    let decodedJwt:any = jwtDecode(this.accesToken)
    console.log(decodedJwt);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scpoe;
  }
}
