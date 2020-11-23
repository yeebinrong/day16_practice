import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cartItem } from '../models';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnChanges {
  @Input() item:cartItem;
  @Output() onUpdate = new EventEmitter<cartItem>();
  constructor(private fb: FormBuilder) { }

  testForm: FormGroup = this.createForm()

  ngOnChanges(changes: SimpleChanges) {
    this.testForm = this.createForm(this.item);
  }

  updateItem() {
    // cast, coercion
    const value = this.testForm.value as cartItem;
    this.onUpdate.next(value);
    this.testForm.reset;
  }

  createForm(item:cartItem = null):FormGroup {
    return this.fb.group({
        id: this.fb.control(item?.id, [ Validators.required]),
        item: this.fb.control(item?.item, [ Validators.required]),
        quantity: this.fb.control(item?.quantity, [ Validators.required])
    })
  }
}
