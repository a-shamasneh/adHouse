import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  get(){
  	return this.http.get('/api/adds/adminGetall').map(res=>res.json())
  }

  Appr(id){
  	
  	 return this.http.post('/api/adds/appr',{id:id});
  }

  Rej(id){

  	 return this.http.post('/api/adds/reject',{id:id});
  }


}
