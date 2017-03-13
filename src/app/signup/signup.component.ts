import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	 fullname:string;
	 email: string;
	 password:string;
	 //image:string;
	 message:string;
  constructor(private Auth:AuthService) {
   }

  ngOnInit() {
  }
	 addUser(){
	    var newUser = {
	    username:this.fullname,
	    email:this.email,
	    password:this.password
	    //,
	   // au_img:this.image,
	        }
	        this.Auth.auth(newUser).subscribe(ok=>{this.message=ok["_body"];
	       this.fullname = '';
	       this.email = ''; 
	       this.password ='';
	    });   
    };
    chieckUser(){
	    var newUser = {
	    username:this.fullname,
	    email:this.email,
	    password:this.password
	    //,
	   // au_img:this.image,
	        }
	        this.Auth.login(newUser).subscribe(ok=>{this.message=ok["_body"];
	    });   
    }


}
