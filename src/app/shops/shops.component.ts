import { Component, OnInit } from '@angular/core';
import {shopsinfo} from '../shopsinfo';
import {ShopsdataService} from '../firebase/shopsdata.service';
import { villagename } from '../villagename';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit {

  shopname:shopsinfo[];
  curr_village:string;
  shopref:AngularFirestoreCollection<shopsinfo>;
  shopsname$ : Observable<shopsinfo[]>;

  

  gaon$ :BehaviorSubject<string>;

  constructor(public sds:ShopsdataService,public afs:AngularFirestore,private nav:NavController) 
  {   
    this.curr_village = this.sds.curr_village;
    this.gaon$= new BehaviorSubject(this.curr_village);  
    this.shopsname$ = this.gaon$.pipe(
      switchMap(village => 
        this.afs.collection<shopsinfo>('Shopkeepers', ref => ref.where('village', '==', village)).valueChanges()
      )
    );
     this.shopsname$.subscribe(ref=>{this.shopname=ref});
      
    
   }

  ngOnInit() { 
}

onclick()
{
this.nav.navigateForward('/shopping');
}

}
//,ref=>ref.where('village','==',this.curr_village)
//name =>{this.shopname = name}