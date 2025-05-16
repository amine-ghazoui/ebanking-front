import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/custome.model';

@Component({
  selector: 'app-customer-account',
  standalone: false,
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent implements OnInit {

  customerId! : string;
  customer! : Customer;

  // ce service pour récuperer l'id depuis l'URL 
  constructor(private route : ActivatedRoute, private router : Router){
    // pour récuperer l'objet customer dans l'URL
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
  }

  
}
