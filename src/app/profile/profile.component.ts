import { Component, OnInit } from '@angular/core';
import { userDataService } from '../userdata.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userdata:any;
id:any;
  constructor(private user:userDataService) { 

  	this.id =localStorage.getItem('id');
  		this.user.profile(this.id).subscribe( 
  			 ok=>{
			  		this.userdata = ok ;
  			 	console.log(this.userdata);

			  	})

  }
  
  
  
 

  ngOnInit() {
  }

}
