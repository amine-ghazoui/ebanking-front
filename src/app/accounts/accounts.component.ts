import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { Observable } from 'rxjs';
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{

  accountFormGroup! : FormGroup;
  currentPage : number = 0;
  pageSize : number = 5;
  accountObservable! : Observable<AccountDetails>;


  constructor(private fb : FormBuilder, private accountService : AccountsService){}

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control('')
    })
  }

  handleSearchAccount(){
    let accountId : string = this.accountFormGroup.value.accountId;
    // au lieux d'utilisé .subscibe....
    this.accountObservable =  this.accountService.getAccount(accountId, this.currentPage, this.pageSize);
  }


}
