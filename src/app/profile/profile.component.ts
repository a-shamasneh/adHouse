import { Component, OnInit } from '@angular/core';
import { userDataService } from '../userdata.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
date:any;
email:any;
username:any;
image:string;
userAdv : any;
id:any;
  constructor(private user:userDataService) { 

  	this.id =localStorage.getItem('id');
  		this.user.profile(this.id).subscribe( 
  			 ok=>{
  			 this.email	= ok.email;
         this.date = ok.date;
         this.username = ok.username;
         this.image = ok.image;
         
			  	})
      this.user.getAdv(this.id).subscribe( adv => {
        this.userAdv = adv ;
      })

  }
  ngOnInit() {
  }

}
