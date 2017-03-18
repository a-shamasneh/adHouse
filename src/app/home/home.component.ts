import { Component, OnInit } from '@angular/core';
import { GetaddService } from '../getadd.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;
	alladds:any;
  selectedCat :string;
  constructor(private Get:GetaddService) {
  this.Get.getalladv().subscribe(ok=>{
    this.alladds=ok
    console.log(this.alladds)
  });

  this.categories = ["careers", "cars", "furniture" ]    

   }

  ngOnInit() {
    


  }

  
  	
  

}
