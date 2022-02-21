import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoanAccountService} from './loan-account.service'

import { FormBuilder, Validators,FormArray,FormGroup, FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['./loan-account.component.css'],
})
export class LoanAccountComponent implements OnInit {
  message!: any;
  resData: any;

  imgfile: File = null; // Variable to store file
  signfile: File = null; // Variable to store file

  customerImage!: any
  signatureImage!: any



  constructor(
    private router: Router,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog,

    private accountservice: LoanAccountService
  ) {
    this.message = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.getPage();
  }
  loading = false;

  formData = this.fb.group({
    accountManager: ['KAMAU'],
    customerCode: [''],
    accountName: [''],
    accountOwnership: [''],
    currency: [''],
    glSubhead: [''],
    lienAmount: [''],
    referredBy: [''],
    schemeCode: [''],
    solCode: [''],
    withholdingTax: [''],
    amountDisbursed: [''],
    repaymentPeriod: [''],
    matured: [''],
    accountStatus: [''],

    deleteFlag: [''],
    postedBy: [''],
    postedFlag: [''],
    postedTime: [''],
    modifiedBy: [''],
    modifiedTime: [''],
  });

  disabledFormControll() {
    this.formData.controls.accountManager.disable();
    this.formData.controls.customerCode.disable();
    this.formData.controls.repaymentPeriod.disable();
    this.formData.controls.currency.disable();
    this.formData.controls.glSubhead.disable();
    this.formData.controls.lienAmount.disable();
    this.formData.controls.referredBy.disable();
    this.formData.controls.schemeCode.disable();
    this.formData.controls.solCode.disable();
    this.formData.controls.withholdingTax.disable();
    this.formData.controls.amountDisbursed.disable();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.formData.controls;
  }

  getPage() {
    console.log(this.message.function_type);
    if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Loan'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        customerCode: [''],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        amountDisbursed: [''],

        repaymentPeriod: ['45'],
        accountOwnership:['la'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
        loan:['']
      });
    } else if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Savings'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        customerCode: [''],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        accountOwnership:['sb'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
        loan:['']

//         loan: this.fb.group([
//           this.fb.group({
//             loanDocuments: new FormArray([
//             this.fb.group({
//             documentImage: [this.customerImage, Validators.required]
              
//     }),
//     this.fb.group({
//       documentImage: [this.signatureImage, Validators.required]
      
// })
//             ])
//             })
//           ])

// loan: new FormGroup({
//   loanDocuments: new FormArray([
//     new FormGroup({
//       documentImage: new FormControl(this.customerImage),
//     })
//   ])
// }
//)




        // acid: ['P7845'],

        // amountDisbursed: [''],
        // repaymentPeriod: ['45'],
      });
    } else if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Term-Deposit'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        customerCode: [''],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        accountOwnership:['td'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
      });
    } else if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Overdraft'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        customerCode: [''],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        accountOwnership:['od'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
      });
    } else if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Current'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        customerCode: [''],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        accountOwnership:['ca'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
      });
    }

    else if (
      this.message.function_type == 'A-Add' &&
      this.message.account_type == 'Office'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        accountOwnership:['oa'],
        deleteFlag: ['N'],
        postedBy: ['KAMAU'],
        postedFlag: ['Y'],
        openingDate: [new Date()],
        postedTime: [new Date()],
        modifiedBy: ['KAMAU'],
        modifiedTime: [new Date()],
        accountName: ['KAMAU'],
        matured: ['N'],
        accountStatus: ['P'],
      });
    }
    
    //'A-Add','I-Inquire','M-Modify','V-Verify','X-Cancel'
    else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Loan'
    ) {
      console.log("kibet")

      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: ['kes'],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: ['CHEGE'],
        schemeCode: ['test'],
        solCode: [''],
        withholdingTax: [''],
        amountDisbursed: [''],
        repaymentPeriod: [''],
      });
      this.disabledFormControll();
      
    } else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Savings'
    ) {

      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )





      this.disabledFormControll();
    } else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Overdraft'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Term-Deposit'
    ) {

      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Current'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
    else if (
      this.message.function_type == 'I-Inquire' &&
      this.message.account_type == 'Office'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
    
    else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Loan'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        amountDisbursed: ['40000'],
        repaymentPeriod: [''],
      });
    } else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Savings'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
    } else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Overdraft'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],
            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
    } else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Term-Deposit'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],
            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
    } else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Current'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
    }
    else if (
      this.message.function_type == 'M-Modify' &&
      this.message.account_type == 'Office'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
    }

    else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Loan'
    ) {

      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: ['S001'],
        withholdingTax: [''],
        amountDisbursed: [''],
        repaymentPeriod: [''],
      });
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Savings'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["Y"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Overdraft'
    ) {

      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: [''],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: ['S001'],
        withholdingTax: [''],
        amountDisbursed: [''],
        repaymentPeriod: [''],
      });
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Term-Deposit'
    ) {

      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["Y"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Current'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["Y"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
    else if (
      this.message.function_type == 'V-Verify' &&
      this.message.account_type == 'Office'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: [data.entity.deleteFlag],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["Y"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
    
    else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Loan'
    ) {
      this.formData = this.fb.group({
        accountManager: ['KAMAU'],
        currency: ['KES'],
        glSubhead: [''],
        lienAmount: [''],
        referredBy: [''],
        schemeCode: [''],
        solCode: [''],
        withholdingTax: [''],
        amountDisbursed: [''],
        repaymentPeriod: [''],
      });
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Savings'
    ) {

      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: ["Y"],
            deleteTime: [new Date()],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )

      this.disabledFormControll();
    } else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Overdraft'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: ["Y"],
            deleteTime: [new Date()],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Term-Deposit'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: ["Y"],
            deleteTime: [new Date()],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    } else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Current'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: ["Y"],
            deleteTime: [new Date()],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
    else if (
      this.message.function_type == 'X-Cancel' &&
      this.message.account_type == 'Office'
    ) {
      this.accountservice.retriveAccount(this.message.account_code).subscribe(
        data=>{
           console.log(data.entity)
          // if(data.entity.withholdingTax==true){

          // }
          // else{


          // 
          this.resData =data.entity
          if(this.resData.withholdingTax==true){
            this.resData.withholdingTax="True"
          }else{
            this.resData.withholdingTax="False"
          }
          this.formData = this.fb.group({
            accountManager: [data.entity.accountManager],
            customerCode: [data.entity.customerCode],
            currency: [data.entity.currency],
            glSubhead: [data.entity.glSubhead],
            lienAmount: [data.entity.lienAmount],
            referredBy: [data.entity.referredBy],
            schemeCode: [data.entity.schemeCode],
            solCode: [data.entity.solCode],
            withholdingTax: [this.resData.withholdingTax],

            accountBalance:[data.entity.accountBalance],

            accountOwnership:[data.entity.accountOwnership],
            deleteFlag: ["Y"],
            deleteTime: [new Date()],
            postedBy: [data.entity.postedBy],
            postedFlag: [data.entity.postedFlag],
            openingDate: [data.entity.openingDate],
            postedTime: [data.entity.postedTime],
            modifiedBy: ['KAMAU'],
            modifiedTime: [new Date()],
            accountName: [data.entity.accountName],
            matured: [data.entity.matured],
            accountStatus: [data.entity.accountStatus],
            acid:[data.entity.acid],
            sn:[data.entity.sn],

            verifiedBy:["KAMAU"],
            verifiedFlag:["N"],
            verifiedTime:[new Date()]


            // amountDisbursed: [data.entity],
            // repaymentPeriod: [data.entity],
          });

        },
        error=>{

        }

      )
      this.disabledFormControll();
    }
  }

  onSubmit() {
    this.formData.value.loan={
      amountDisbursed:this.formData.value.amountDisbursed ,
      disbursementDate:new Date(),
      repaymentPeriod: this.formData.value.repaymentPeriod,
      loanDocuments: [
        {
          documentImage: this.customerImage,
          documentTitle: "string",
        },
        {
          documentImage: this.signatureImage,
          documentTitle: "string",
        }
      ]
    }

    if( this.message.account_type != 'Loan'){
    delete this.formData.value.loan
     delete this.formData.value.amountDisbursed
    delete this.formData.value.repaymentPeriod
    }
    console.log(this.formData.value);
    if( this.message.function_type == 'A-Add'){
      this.accountservice.createAccount(this.formData.value).subscribe(
        data=>{
          console.log("works")
        },
        error=>{
          console.log("error")
        }
      )
      
    }
    if( this.message.function_type != 'A-Add'){
      this.accountservice.updateAccount(this.formData.value).subscribe(
        data=>{
          console.log("works")
        },
        error=>{
          console.log("error")
        }
      )
      
    }
    console.log(this.formData.value);
  }

  onPhotoChange(event) {
    this.imgfile = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
                    var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
reader.onload = () => {
this.customerImage=reader.result;
console.log(this.customerImage)
}
reader.onerror = function (error) {
 console.log('Error: ', error);
};

}

}

onSignatureChange(event) {
  this.signfile = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
 
                        var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
reader.onload = () => {
this.signatureImage=reader.result;
console.log(this.signatureImage)
}
reader.onerror = function (error) {
console.log('Error: ', error);
};

}
}
}
