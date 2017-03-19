import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  	auth(){
  	if(!localStorage.getItem("com.addhouse")){
  		return false
  	}else{
  		return true
  	}
  	}
    authAdmin(){
      if(JSON.parse(localStorage.getItem('UserType'))===true){
        return true
       }
       return false
    }
  logout(){
  	localStorage.clear();
  	window.location.href=("")
  }

}
