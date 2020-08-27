import { Component, OnInit } from '@angular/core';

import {FirebasedataService} from '../firebase/firebasedata.service';
import { Observable } from 'rxjs';
import { villagename } from '../villagename';
import { NavController } from '@ionic/angular';
import {ShopsdataService} from '../firebase/shopsdata.service';

@Component({
  selector: 'app-selectgaon',
  templateUrl: './selectgaon.component.html',
  styleUrls: ['./selectgaon.component.scss'],
})
export class SelectgaonComponent implements OnInit {

  villagenam:villagename[];

  

  constructor(private fds:FirebasedataService,private nav:NavController,public sds:ShopsdataService) {  
   }

  ngOnInit() {this.fds.getVillname().subscribe(villa=>{this.villagenam=villa});}

  
  openshop(data)
  {
    this.sds.curr_village=data;
   // console.log(this.sds.curr_village);
     this.nav.navigateForward('/shops');
  }

 
  

}
