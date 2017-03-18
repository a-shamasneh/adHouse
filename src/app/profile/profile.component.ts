import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { userDataService } from '../userdata.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
date:any;
email:any;
username:any;
image1:string;
image:string;
userAdv : any;
id:any;
message:any;
  constructor(private user:userDataService , private changeDetectorRef: ChangeDetectorRef) { 

  	this.id =localStorage.getItem('id');
  		this.user.profile(this.id).subscribe( 
  			 ok=>{
  			 this.email	= ok.email;
         this.date = ok.date;
         this.username = ok.username;
         this.image = ok.image;
         
			  	})
      this.user.getAdv(this.id).subscribe( adv => {
        console.log(this.id)
        this.userAdv = adv ;
        console.log(adv)

      })

  }
  ngOnInit() {
  }
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
      this.image1=result;
        
       
       
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  changeImage(){
        
        var newIm = {
    _id:JSON.parse(this.id),
    image:this.image1
        }
        this.user.changeImage(newIm).subscribe(ok=>{console.log(ok);
          this.message="Your image has been uploaded";
this.id =localStorage.getItem('id');
      this.user.profile(this.id).subscribe( 
         ok=>{
         this.email = ok.email;
         this.date = ok.date;
         this.username = ok.username;
         this.image = ok.image;
         
          })          
        });
    }


}
