import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	 username:string;
	 email: string;
	 password:string;
	 message:any;
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
	        this.Auth.signup(newUser).subscribe(ok=>{console.log(ok);
	       if(typeof(ok)=="string"){
  				
  			this.message=ok
  		}
  		else{
  			window.location.href=("/#login")
  		}
	    });   
    };
   


}
