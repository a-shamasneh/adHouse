import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { AddservService } from '../addserv.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
	 message:string;
	 desc:string;
	 category: string;
	 location:string;
	 image:string;
	 phone:string;
   id:string;

   @ViewChild('input')
myinput: any;
  constructor(private Adds:AddservService,private changeDetectorRef: ChangeDetectorRef) {
     if(!localStorage.getItem("com.addhouse")){
      window.location.href=("")
    }
   this.id=localStorage.getItem("id");
   console.log(this.id);

   }

  ngOnInit() {
  }
  reset() {
    
    this.myinput.nativeElement.value = "";
    
}

  // upload image start
  	fileChange(input){
    this.readFiles(input.files);

  }
  readFile(file, reader, callback){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }
    
    // Read the file
    reader.readAsDataURL(file);
  }
  readFiles(files){
    // Create the file reader
    let reader = new FileReader();
    
    // If there is a file
    if (files[0]){
      // Start reading this file
      this.readFile(files[0], reader, (result) =>{
        // Create an img element and add the image file data to it
      this.image=result;
        
       
       
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  // upload image end 

	 addServ(){
        
        var newAd = {
    ad_cat:this.category,
    ad_loc:this.location,
    ad_desc:this.desc,
    ad_img:this.image,
    ad_phone:this.phone,
    ad_uid:JSON.parse(this.id)
        }
        this.Adds.Addserv(newAd).subscribe(ok=>{console.log(ok);
          this.message="Your Add has been uploaded waiting for approve";
         
        });
    }
}
