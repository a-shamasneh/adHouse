import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Admin:AdminService) { 
  	
  }

  ngOnInit() {
  }

}