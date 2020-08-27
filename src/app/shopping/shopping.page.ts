import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { CartServiceService } from '../shopping/cart-service.service';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModelPage } from '../shopping/cart-model/cart-model.page';
import { PopOverComponent } from '../shopping/components/pop-over/pop-over.component';

import{GroceryService} from './grocery.service';
import {grocery} from './product';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  cart = [];
  products = [];
  grocery:grocery[];
  cartItemCount: BehaviorSubject<number>;
  cartIsEmpty: boolean;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartServiceService,
              private gs:GroceryService,
              private modalCtrl: ModalController,
              private alertDialog: AlertController,
              public popoverController: PopoverController) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.gs.getgrocery().subscribe(gro=>{this.grocery=gro});
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartIsEmpty = true;
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
    this.cartIsEmpty = false;
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModelPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  async openEmptyCartAlert() {
    const alert = await this.alertDialog.create({
      mode: 'ios',
      message: 'Please add items to cart',
      buttons: ['OK']
    });
    await alert.present();
  }

  animateCSS(animationName , keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

   
    function handleAnimationEnd() { 
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      translucent: true,
    });
    return await popover.present();
  }
}


