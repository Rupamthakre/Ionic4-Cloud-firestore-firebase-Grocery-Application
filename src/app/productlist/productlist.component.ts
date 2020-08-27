import { Component, OnInit } from '@angular/core';
import  {ProducttypeService} from '../producttype.service';
import { Protype } from '../productcategory';
import { NavController } from '@ionic/angular';
import { FirebasedataService } from '../firebase/firebasedata.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {

  category:Array<Protype>;
  constructor(private protype :ProducttypeService,private nav:NavController,private fds:FirebasedataService) 
  {
    this.category = this.protype.category;

  }

  ngOnInit() {}

  open(data)
  {

    
    this.nav.navigateForward('/selectgaon');

  }

}
