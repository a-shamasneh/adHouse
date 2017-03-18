import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class userDataService {
  constructor(private http:Http) { }
  profile(id){
  	return this.http.get('/api/getUser/'+id).map(res=>res.json())
  }	
  getAdv(id){
  	return this.http.get('/api/adds/'+id).map(res=>res.json())
  }
  changeImage(data){
  	console.log(data)
  	return this.http.post('/api/changImage',data).map(res=>res.json())
  }  
}
