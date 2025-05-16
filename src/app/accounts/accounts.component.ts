import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { Observable } from 'rxjs';
import { AccountDetails } from '../model/account.model';
import Swal from 'sweetalert2';

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
  operationFormGroup! : FormGroup;


  constructor(private fb : FormBuilder, private accountService : AccountsService){}

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control('')
    });

    this.operationFormGroup = this.fb.group({
      operationType : this.fb.control(null),
      amount : this.fb.control(0),
      description : this.fb.control(null),
      accountDestination : this.fb.control(null)
    });
  }

  handleSearchAccount(){
    let accountId : string = this.accountFormGroup.value.accountId;
    // au lieux d'utilisé .subscibe....
    this.accountObservable =  this.accountService.getAccount(accountId, this.currentPage, this.pageSize);
  }

  goToPage(page : number){
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation(){
    let accountId : string = this.accountFormGroup.value.accountId;
    let operationType = this.operationFormGroup.value.operationType;
    let amount : number = this.operationFormGroup.value.amount;
    let description : string = this.operationFormGroup.value.description;
    let accountDestination : number = this.operationFormGroup.value.accountDestination;

    if(operationType=='DEBIT'){
      this.accountService.debit(accountId, amount, description).subscribe({
        next : data =>{
            Swal.fire({
              title: "Success Debit ",
              icon: "success",
              draggable: true
            });
        }, error : err =>{
          console.log(err)
        }
      })
    }
    else if(operationType == 'CREDIT'){

        this.accountService.credit(accountId, amount, description).subscribe({
        next : data =>{
            Swal.fire({
              title: "Success Debit ",
              icon: "success",
              draggable: true
            });
        }, error : err =>{
          console.log(err)
        }
      })

    } else if(operationType == 'TRANSFER'){

        this.accountService.credit(accountId,  amount, description).subscribe({
        next : data =>{
            Swal.fire({
              title: "Success Debit ",
              icon: "success",
              draggable: true
            });
        }, error : err =>{
          console.log(err)
        }
      })
    }
  }


}
