import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {villagename} from '../villagename';
import {shopsinfo} from '../shopsinfo';


@Injectable({
  providedIn: 'root'
})
export class ShopsdataService {

  

 constructor(private afs:AngularFirestore) { }

  //gaon_name:Array<villagename>=[{name:'a'},{name:'b'}];

  curr_village:string;


 /* getshops(){
   
     return this.shopsname;
   }
*/

}
