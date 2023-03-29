import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { RestaurantFavesService } from '../restaurant-faves.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
    constructor(private orderAPI: RestaurantFavesService){}
    //using ngOnInit because the constructor only gets called when the app is initally loaded, but ngOnInit gets called any time the component is loaded in 
    ngOnInit(){
      this.loadOrders();
    }

    loadOrders():void{
      this.orderAPI.getAllOrders().subscribe(
        (result) => {
          this.orders = result;
        }
      )
    }
  
    delete(id:number):void{
      this.orderAPI.deleteOrder(id).subscribe(
        (result)=>{
          console.log('Item deleted at ' + id);
          this.loadOrders();
        }
      );
      
    }

    addOrder(newOrder:Order){
     // console.log("Heyas");
      this.orders.push(newOrder);
      this.loadOrders();
    }
  }