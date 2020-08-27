import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  //constructor() { }

  data: Product[] = [
    { id: 0, name: 'Rice', price: 50, amount: 1 },
    { id: 1, name: 'Pulse', price: 30, amount: 1 },
    { id: 2, name: 'Sugar', price: 50, amount: 1 },
    { id: 3, name: 'Nirma', price: 30, amount: 1 },
    { id: 4, name: 'Soup', price: 20, amount: 1 },
    { id: 5, name: 'Masala', price: 100, amount: 1 },
    { id: 6, name: 'Maggy', price: 50, amount: 1 },
    { id: 7, name: 'Dryfruit', price: 40, amount: 1 },
    { id: 8, name: 'Soda', price: 30, amount: 1 },
    { id: 9, name: 'Pancakes', price: 50, amount: 1 }
  ];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.getCartItemCount();
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart.length = 0;
  }
}