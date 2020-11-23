import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from '../models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemList:cartItem[];
  @Output() itemClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick (i) {
    this.itemClick.next(i);
  }
}
