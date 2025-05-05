import { CustomerService } from './../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/custome.model';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers! : Observable<Array<Customer>>;
  errorMessage! : string; // ou bien : Object | undefined
  constructor(private customerService : CustomerService){}


  ngOnInit(): void {
    this.getCustomers();
  }
  
  getCustomers(){
    this.customers = this.customerService.getCustomers().pipe(
      catchError( err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    )
  }


}
