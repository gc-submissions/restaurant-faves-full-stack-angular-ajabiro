import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})

//Must include a restaurant-faves service that makes http requests (get, post and delete) 
export class RestaurantFavesService {

  //Using local host can put the whole thing all together instead of the plus put the /orders is the end point for all CRUD
  baseURL: string = "http://localhost:8080" + "/orders";

  constructor(private http: HttpClient) { }

// service code looks similar regarless of backend 
getAllOrders():Observable<Order[]>{
  return this.http.get<Order[]> (this.baseURL); 
}

getOrder(id:number):Observable<Order>{
  return this.http.get<Order>(this.baseURL + "/"+id);
}

deleteOrder(id:number):Observable<Object>{
   return this.http.delete(this.baseURL+"/" +id);
}

// createOrder(newOrder:Order):Observable<Object>{
//   return this.http.post(this.baseURL, newOrder);
// }
// }

createOrder(newOrder:Order):Observable<Order>{
  return this.http.post<Order>(this.baseURL, newOrder);
  }
}