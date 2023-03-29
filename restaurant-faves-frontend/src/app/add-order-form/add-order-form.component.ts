import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from '../order';
import { RestaurantFavesService } from '../restaurant-faves.service';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent {
  @Output() orderSave = new EventEmitter<Order>(); 
  newOrder:Order = ({} as any) as Order; 
  constructor(private orderAPI:RestaurantFavesService){}

  addOrder(){
    //no param needed since this already has access to new order 
    this.orderAPI.createOrder(this.newOrder).subscribe(
      () =>{
        //This makes the new order availiable to other components so they can use it
        this.orderSave.emit(this.newOrder);
        this.newOrder = ({} as any) as Order; 
      }
    );

  }
}

