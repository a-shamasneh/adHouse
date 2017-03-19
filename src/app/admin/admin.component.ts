import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	Adds:any;
	
  constructor(private Admin:AdminService) { 
  		this.Admin.get().subscribe(ok=>{
  			this.Adds=ok;
  			console.log(this.Adds)
  		})
  }

  ngOnInit() {
  }

   Approve(id){
   	let ids=id;
   		this.Admin.Appr(id).subscribe(ok=>{
    		console.log(ok)
    		for(var i=0;i<this.Adds.length;i++){
    			if(this.Adds[i]._id==ids){
    				this.Adds.splice(i,1)
    			}
    		}
    	})
    }
    Reject(id){
    	let ids=id;
    	this.Admin.Rej(id).subscribe(ok=>{
    		console.log(ok)
    		for(var i=0;i<this.Adds.length;i++){
    			if(this.Adds[i]._id==ids){
    				this.Adds.splice(i,1)
    			}
    		}
    	})
    }

}
