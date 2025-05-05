import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/custome.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) {}

  getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers");
  }

  serachCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers/search");
  }
}

// les méthodes get, post, put retourne un objet de type Observable
