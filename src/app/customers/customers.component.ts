import { CustomerService } from './../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/custome.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers! : Observable<Array<Customer>>;
  errorMessage! : string; // ou bien : string | undefined
  searchFormGroup : FormGroup | undefined;

  constructor(private customerService : CustomerService, private fb : FormBuilder){}


  ngOnInit(): void {
    
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control(""), 
    });
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

  handleSearchCustomers(){

  }


}
