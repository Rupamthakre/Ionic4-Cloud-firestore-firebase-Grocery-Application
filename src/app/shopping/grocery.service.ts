import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {grocery} from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  grocerydata:Observable<grocery[]>;

  constructor(private afs:AngularFirestore) 
  { 
    this.grocerydata =this.afs.collection<grocery>('/grocery').valueChanges();
  }

  getgrocery()
  {
    return this.grocerydata;
  }


}
