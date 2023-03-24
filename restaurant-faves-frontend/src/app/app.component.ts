import { Component } from '@angular/core';
import { RestaurantFavesService } from './restaurant-faves.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-faves-frontend';
  constructor(private orderAPI:RestaurantFavesService){
    this.orderAPI.getAllOrders().subscribe(
      (result)=>{
        console.log(result);
      }
    )
    this.orderAPI.getOrder(1).subscribe(
      (result) =>{
        console.log(result);
      }
    )
  }
}
