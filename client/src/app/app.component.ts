import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { cartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  itemList: cartItem[] = [];
  itemForm: FormGroup;

  // fb and http is dependenciy injection
  constructor(fb: FormBuilder, private http: HttpClient) { }

  async ngOnInit() {
    this.itemList = await this.http.get<cartItem[]>('http://localhost:3000/cart')
      .toPromise();

    console.info(' >> item List', this.itemList)
  }
  
  onItemClick (i) {
    console.log("item id is : ", i);
  }
}
