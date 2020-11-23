import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItem } from './models';

@Injectable()
export class CartService {
    constructor(private http:HttpClient) {}

    async getCart():Promise<cartItem[]> {
        return await this.http.get<cartItem[]>('http://localhost:3000/cart').toPromise();
      }
      
    async getItem(id):Promise<cartItem> {
        return await this.http.get<cartItem>('http://localhost:3000/cart/' + id).toPromise();
    }
    
    async updateItem(item: cartItem):Promise<any> {
        return await this.http.put<any>(`http://localhost:3000/cart/${item.id}`, item).toPromise();
    }
}