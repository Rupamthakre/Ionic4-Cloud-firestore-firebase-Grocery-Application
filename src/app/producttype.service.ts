import { Injectable } from '@angular/core';
import {Protype} from '../app/productcategory';


@Injectable({
  providedIn: 'root'
})



export class ProducttypeService {

  constructor() { }

  category:Array<Protype> = 
  [
    {name:'Grocery',image:'assets/products/grocery.jpg'},
    {name:'Vegetables',image:'assets/products/vegetables.jpg'},
    {name:'MilkProduct',image:'assets/products/milkproduct.jpg'},
    {name:'FarmMachines',image:'assets/products/trackter.jpg'},
    {name:'BuildingMaterial',image:'assets/products/buildingm.jpg'}
  ];


}
