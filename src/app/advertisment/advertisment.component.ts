import { Component, OnInit } from '@angular/core';
import { userDataService } from '../userdata.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent implements OnInit {
  advdata:any;
  comments:any;
  private url;
  id :any;
  constructor(private user:userDataService , private route:ActivatedRoute) {
  			this.url = this.route.params.subscribe( params=> {
  				this.id = params['id'];
  			})
  	  		this.user.getAdvInfo(this.id).subscribe( 
  			 ok=>{
  			 	this.advdata = ok;
  			 	console.log(ok);
			  	})
  	  		console.log(this.advdata)
  	  		this.user.getCommById(this.id).subscribe(data =>{
  	  			console.log(data)
  	  			this.comments = data ;

  	  		})

   }

  ngOnInit() {
  }
  com:any;
  
}
