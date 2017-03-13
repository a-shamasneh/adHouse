import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(private http:Http) { 

  }

  auth(data){
  console.log(data);
        return this.http.post('/api/signup',data);
    };
  login(username: string, password: string) {
        return this.http.post('/api/signin', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    } 

}
