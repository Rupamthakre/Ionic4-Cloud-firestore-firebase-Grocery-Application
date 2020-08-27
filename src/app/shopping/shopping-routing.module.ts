import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingPage } from './shopping.page';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingPage
  },
  {
    path: 'cart-model',
    loadChildren: () => import('./cart-model/cart-model.module').then( m => m.CartModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingPageRoutingModule {}
