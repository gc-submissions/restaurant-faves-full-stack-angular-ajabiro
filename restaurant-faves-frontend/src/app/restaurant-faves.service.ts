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

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseURL}`);
  };
  //returning a single order
  getOrder(id:number):Observable<Order>{
    return this.http.get<Order>(this.baseURL +"/"+id);
  }
  createOrder(newOrder: Order): Observable<Order> {
    // For POST, pass the body data as a second parameter after the URL
    return this.http.post<Order>(`${this.baseURL}`, newOrder);
  };

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  };
}


