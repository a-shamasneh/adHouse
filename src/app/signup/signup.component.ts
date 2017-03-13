import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	 username:string;
	 email: string;
	 password:string;
	 message:string;
  constructor(private Auth:AuthService) {
   }

  ngOnInit() {
  }
	 addUser(){
	    var newUser = {
	    username:this.username,
	    email:this.email,
	    password:this.password
	    
	        }
	        this.Auth.signup(newUser).subscribe(ok=>{this.message=ok["_body"];
	       this.username = '';
	       this.email = ''; 
	       this.password ='';
	    });   
    };
   


}
