import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetaddService {

  constructor(private http:Http) { }

getalladv(){
	return this.http.get('/api/adds/getall').map(res=>res.json())
}
}
