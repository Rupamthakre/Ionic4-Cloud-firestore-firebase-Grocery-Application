import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';
import {CartModelPageModule} from './cart-model/cart-model.module';

import { ShoppingPage } from './shopping.page';

import {CartServiceService} from './cart-service.service';
import {GroceryService} from './grocery.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartModelPageModule,
    ShoppingPageRoutingModule
  ],
  declarations: [ShoppingPage],
  providers:[CartServiceService,GroceryService]
})
export class ShoppingPageModule {}
