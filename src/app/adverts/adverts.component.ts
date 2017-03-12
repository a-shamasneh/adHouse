import { Component, OnInit } from '@angular/core';
import { AddservService } from '../addserv.service';
@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
	 
	 desc:string;
	 category: string;
	 location:string;
	 image:string;
	 phone:string;

  constructor(private Adds:AddservService) {
   }

  ngOnInit() {
  }

	 addServ(){
        
        var newAd = {
    ad_cat:this.category,
    ad_loc:this.location,
    ad_desc:this.desc,
    ad_img:this.image,
    ad_phone:this.phone
        }
        this.Adds.Addserv(newAd).subscribe(ok=>{console.log(ok)});
         
        
    }
}
