import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Product, CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.page.html',
  styleUrls: ['./cart-model.page.scss'],
})
export class CartModelPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartServiceService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your chakula as soon as possible',
      buttons: ['SAWA']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }




}








 

  
