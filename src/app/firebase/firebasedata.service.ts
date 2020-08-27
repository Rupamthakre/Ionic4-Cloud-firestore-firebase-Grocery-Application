import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {villagename} from '../villagename';


@Injectable({
  providedIn: 'root'
})


export class FirebasedataService {
  villagename: Observable<villagename[]>;

 // 
  //current_name:string='';
 
  
  constructor(private afs:AngularFirestore) 
  {
    this.villagename = this.afs.collection<villagename>('villagename').valueChanges();
   
   }

   getVillname(){
     return this.villagename;
   }

   
}
