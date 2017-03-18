import { Component, OnInit } from '@angular/core';
import {GetaddService } from '../getadd.service';
import {CategoriesPipe} from '../categories.pipe';

@Component({
  moduleId:module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  
  
})
export class HomeComponent implements OnInit {
  //pipes///
  
  catgs:any = ["careers","cars","furniture","electronic","Other"];
   

  ///////////
	alladds:any;
  constructor(private Get:GetaddService) {
  this.Get.getalladv().subscribe(ok=>{
    this.alladds=ok
    console.log(this.alladds)
  });
   }

  ngOnInit() {
     

  }
}
