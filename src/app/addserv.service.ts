import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AddservService {

  constructor( private http:Http) { }
  
  Addserv(data){
  console.log(data);
        
        return this.http.post('/api/addserv',data);
            
    }
}
