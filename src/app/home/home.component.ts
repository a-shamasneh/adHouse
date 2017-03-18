import { Component, OnInit } from '@angular/core';
import {GetaddService } from '../getadd.service';
import {CategoriesPipe} from '../categories.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
  
})
export class HomeComponent implements OnInit {
  //pipes///
  
  catg:any = ["Careers","Cars","Furniture","Electronics","Other"];
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
