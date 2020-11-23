import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { CartService } from './cart.service';
import { cartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  itemList: cartItem[] = [];
  item: cartItem;

  // fb and http is dependenciy injection
  constructor(private cartSvc: CartService) { }

  async ngOnInit() {
    this.item = { id: null, item: null, quantity: null };
    this.itemList = await this.cartSvc.getCart();
  }
  
  async onItemClick ($event: string) {
    this.item = await this.cartSvc.getItem($event);
  }

  async onUpdate ($event: cartItem) {
    // PUT /cart/:id
    console.info("updating");
    await this.cartSvc.updateItem($event);
    // refresh list
    this.itemList = await this.cartSvc.getCart();
  }
}