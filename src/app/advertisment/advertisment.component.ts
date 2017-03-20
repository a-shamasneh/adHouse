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
  comId:any;
  private url;
  id :any;
  com:any;
  toggle:any = false;
  text:any;
  userId:any;
  inserted:any;
  deletedDone:any;

  constructor(private user:userDataService , private route:ActivatedRoute) {
  			this.url = this.route.params.subscribe( params=> {
  				this.id = params['id'];
  			})
  	  		this.user.getAdvInfo(this.id).subscribe( 
  			 ok=>{
  			 	this.advdata = ok;
  			 	// console.log(ok);
			  	})
  	  		console.log(this.advdata)
  	  		this.user.getCommById(this.id).subscribe(data =>{
  	  			console.log(data)
  	  			this.comments = data ;
  	  			this.comId = data[0]._id
  	  			// console.log(this.comId)

  	  		})

   }
   commentAuth(id){
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	return (id == this.userId) 
   }
   editComment(){
   	this.toggle = !this.toggle ;
   }
   anotherSubmit(){
   	let updateCom = {
   		_id:this.comId,
   		text:this.text
   	}
   	this.user.editComm(updateCom).subscribe(Done =>{
   		this.com = Done ;
   	})
  	console.log(updateCom);
	this.user.getCommById(this.id).subscribe(data =>{
		this.comments = data ;
	})
   }
   insertComment(){
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	let newCom = {
   		userId:this.userId,
   		advId:this.id,
   		text:this.com
   	}
   	this.user.InsertCom(newCom).subscribe(Done => {
   		this.inserted = Done ;
   	})
	this.user.getCommById(this.id).subscribe(data =>{
		this.comments = data ;
	})
   }
   deleteComment(){
   	this.user.delComm(this.comId).subscribe(deleted =>{
   		this.deletedDone = deleted;
   		console.log(this.deletedDone);
   	})
	this.user.getCommById(this.id).subscribe(data =>{
		this.comments = data ;
	})
   }
   isAuth(){
   	this.toggle = !this.toggle;
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	return typeof(this.userId) === 'string'; 
   }

  ngOnInit() {
  }
  
}
