import { HttpClient , HttpParams} from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CollateralService } from './collateral.service';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ChargesLookupComponent } from './charges-lookup/charges-lookup.component';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html',
  styleUrls: ['./collateral.component.css']
})
export class CollateralComponent implements OnInit {
  
  subscription !:Subscription
  isEnabled = true;
  isDisabled = false;
  submitted = false;
  event_id:any;
  params:any;
  eventId:any;
  LodgingDesc: any;
  withdrawalDesc: any;

  function_type:any;
  description:any;
  collateralType:any;
  collateralCode:any;
  message !:any;
  results:any
  error: any;
  lookupdata: any;

  showContractInput =false;

  horizontalPosition :MatSnackBarHorizontalPosition = 'end';
  verticalPosition : MatSnackBarVerticalPosition = 'top';
  flagArray: any = [

    'Y','N'
  ]
  resData: any;
  with_collateralCode: any;
  with_description: any;
  lodge_collateralCode: any;
  lodge_description: any;
 

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private dialog:MatDialog,
    private collateralService:CollateralService,
    private _snackBar : MatSnackBar,
    private ngZone: NgZone,
    private route:ActivatedRoute
    ) {
    this.message = this.router.getCurrentNavigation().extras.state;
  
    console.log(this.message);
    
   
     }
  
  
  ngOnInit(): void {
    this.getPage()
  }

// charge event for withdrawal
  withdrawalLookup(){
    const dialogRef = this.dialog.open(ChargesLookupComponent,{
      height: '400px',
      width:'600px'

    });
    dialogRef.afterClosed().subscribe(
      result =>{
        console.log("with lokup",result);
        
        this.lookupdata = result.data;
        this.with_collateralCode = this.lookupdata.collateralCode;
        this.with_description = this.lookupdata.description;
        this.formData.controls['chargeEventForWithdrawal'].setValue(this.with_collateralCode)
      }
    )

  }
  //charge event for Lodging
  LodgingLookup(){
    const dialogRef = this.dialog.open(ChargesLookupComponent,{
      height: '400px',
      width:'600px'

    });
    dialogRef.afterClosed().subscribe(
      result =>{
        this.lookupdata = result.data;
        this.lodge_collateralCode = this.lookupdata.collateralCode;
        this.lodge_description = this.lookupdata.description;
        this.formData.controls['chargeEventForLodging'].setValue(this.lodge_description)
      }
    )

  }


  get f(){return this.formData.controls}
  
  collateralTypeArray : any = [
    'Vehicle', 'consumer_goods','equipment', 'inventory','farm products'
  ]
  

  formData = this.formBuilder.group({
    collateralType : ['', [Validators.required]],
    collateralCode :['', [Validators.required, Validators.maxLength(4)]],
    description :['', [Validators.required]],
    companyCode:['', Validators.maxLength(4)],
    companyDetails:[''],
    contactDetails:[''],
    customerCode:[''],
    faceValue:['',Validators.required],
    margin:['',Validators.required],
    marketValue:[ Validators.required],
    otherDetails:[''],
    chargeEventForLodging:[''],
    chargeEventForWithdrawal:[''],
    percentageDrawingPower:[''],
    percentageLoanToTake:[''],
    shareCapital:[''],
    sharesIssued:[''],
    deletedBy:['Ann'],
    deletedTime:[new Date()],
    deletedFlag:['N'],
    verifiedBy:['Ann'],
    verifiedTime:[new Date()],
    verifiedFlag:[''],
    postedBy:['Ann'],
    postedTime:[new Date()],
    postedFlag:['Y'],
    modifiedBy:['Ann'],
    modifiedTime:[new Date()],
    

  })
  

  disabledFormControl(){
    this.formData.controls['collateralCode'].disable();
    this.formData.controls['collateralType'].disable();
    this.formData.controls['description'].disable();
    this.formData.controls['companyCode'].disable();
    this.formData.controls['companyDetails'].disable();
    this.formData.controls['contactDetails'].disable();
    this.formData.controls['customerCode'].disable();
    this.formData.controls['faceValue'].disable();
    this.formData.controls['margin'].disable();
    this.formData.controls['marketValue'].disable();
    this.formData.controls['otherDetails'].disable()
    this.formData.controls['chargeEventForLodging'].disable();
    this.formData.controls['chargeEventForWithdrawal'].disable();
    this.formData.controls['percentageDrawingPower'].disable();
    this.formData.controls['percentageLoanToTake'].disable();
    this.formData.controls['shareCapital'].disable();
    this.formData.controls['sharesIssued'].disable();

  

  }
  getPage(){
    this.function_type = this.message.function_type;
    this.collateralCode = this.message.collateralCode;
        if(this.message.function_type == "A-Add"){
            console.log(this.message);
                this.formData = this.formBuilder.group({
                  collateralCode:[this.collateralCode],
                  collateralType:['',[Validators.required]],
                  description:['',[Validators.required]],
                  companyCode:['', [Validators.required, Validators.maxLength(6)]],
                  contactDetails:[''],
                  companyDetails:[''],
                  customerCode:[''],
                  faceValue:['', [Validators.required]],
                  margin:['', [Validators.required]],
                  marketValue:[, [Validators.required]],
                  otherDetails:[''],
                  chargeEventForLodging:[,],
                  chargeEventForWithdrawal:[,],
                  percentageDrawingPower:[,],
                  percentageLoanToTake:[,],
                  shareCapital:[,],
                  sharesIssued:[,],
                  deletedBy:[''],
                  deletedTime:[''],
                  deletedFlag:['N'],
                  verifiedBy:['Ann'],
                  verifiedTime:[new Date()],
                  verifiedFlag:['Y'],
                  postedBy:['Ann'],
                  postedTime:[new Date()],
                  postedFlag:['Y'],
                  modifiedBy:['Ann'],
                  modifiedTime:[new Date()],
                  // sn:[0]
            
                });
              
            
            
       
        }
          else if(this.message.function_type == "I-Inquire"){
           console.log(this.message);
           
          // let code = 'rete'
          this.collateralService.getCollateralByCode(this.message.collateralCode).subscribe(
            res =>{
              console.log(res);
             
               this.resData = res['entity'];
               this.formData = this.formBuilder.group({
                collateralCode:[this.resData.collateralCode],
                collateralType:[this.resData.collateralType],
                description:[this.resData.description],
                companyCode:[this.resData.companyCode],
                companyDetails:[this.resData.companyDetails],
                contactDetails:[this.resData.contactDetails],
                customerCode:[this.resData.customerCode],
                faceValue:[this.resData.faceValue],
                margin:[this.resData.margin],
                marketValue:[this.resData.marketValue],
                otherDetails:[this.resData.otherDetails],
                chargeEventForLodging:[this.resData.chargeEventForLodging],
                chargeEventForWithdrawal:[this.resData.chargeEventForWithdrawal],
                percentageDrawingPower:[this.resData.percentageDrawingPower],
                percentageLoanToTake:[this.resData.percentageLoanToTake],
                shareCapital:[this.resData.shareCapital],
                sharesIssued:[this.resData.sharesIssued],
                // deletedBy:[this.resData.deletedBy],
                // deletedTime:[this.results.deletedTime],
                // deletedFlag:[this.results.deletedFlag],
                // verifiedBy:[this.results.verifiedBy],
                // verifiedTime:[this.results.verifiedTime],
                // verifiedFlag:[this.results.verifiedFlag],
                // postedBy:[this.results.postedBy],
                // postedTime:[this.results.postedTime],
                // postedFlag:[this.results.postedFlag],
                // modifiedBy:[this.results.modifiedBy],
                // modifiedTime:[this.results.modifiedTime],
                
                sn:[this.resData.sn]


              });
           
            }
          )
          this.disabledFormControl();

          }
          else if(this.message.function_type == "M-Modify"){
            console.log("Modifying",this.message);
            
            this.collateralService.getCollateralByCode(this.message.collateralCode).subscribe(
              res =>{

                this.results = res['entity']
                console.log(this.results);
                

                this.formData = this.formBuilder.group({
                  collateralCode:[this.results.collateralCode],
                  collateralType:[this.results.collateralType],
                  description:[this.results.description],
                  companyCode:[this.results.companyCode],
                  companyDetails:[this.results.companyDetails],
                  contactDetails:[this.results.contactDetails],
                  customerCode:[this.results.customerCode],
                  faceValue:[this.results.faceValue],
                  margin:[this.results.margin],
                  marketValue:[this.results.marketValue],
                  otherDetails:[this.results.otherDetails],
                  chargeEventForLodging:[this.results.chargeEventForLodging],
                  chargeEventForWithdrawal:[this.results.chargeEventForWithdrawal],
                  percentageDrawingPower:[this.results.percentageDrawingPower],
                  percentageLoanToTake:[this.results.percentageLoanToTake],
                  shareCapital:[this.results.shareCapital],
                  sharesIssued:[this.results.sharesIssued],

                  deletedBy:[''],
                  deletedTime:[''],
                  deletedFlag:['N'],
                  verifiedBy:[this.results.verifiedBy],
                  verifiedTime:[this.results.verifiedTime],
                  verifiedFlag:[this.results.verifiedFlag],
                  postedBy:[this.results.postedBy],
                  postedTime:[this.results.postedTime],
                  postedFlag:[this.results.postedFlag],
                  modifiedBy:['Ann'],
                  modifiedTime:[new Date()],
                  sn:[this.results.sn]
  
  
                });
              }
            )
       
              
        

          
          }  else if(this.message.function_type == "D-Delete"){
            this.collateralService.getCollateralByCode(this.message.collateralCode).subscribe(
              res =>{

                this.results = res['entity']
                 console.log(this.results);
                 
                this.formData = this.formBuilder.group({
                  collateralCode:[this.results.collateralCode],
                  collateralType:[this.results.collateralType],
                  description:[this.results.description],
                  companyCode:[this.results.companyCode],
                  companyDetails:[this.results.companyDetails],
                  customerCode:[this.results.customerCode],
                  contactDetails:[this.results.contactDetails],
                  faceValue:[this.results.faceValue],
                  margin:[this.results.margin],
                  marketValue:[this.results.marketValue],
                  otherDetails:[this.results.otherDetails],
                  chargeEventForLodging:[this.results.chargeEventForLodging],
                  chargeEventForWithdrawal:[this.results.chargeEventForWithdrawal],
                  percentageDrawingPower:[this.results.percentageDrawingPower],
                  percentageLoanToTake:[this.results.percentageLoanToTake],
                  shareCapital:[this.results.shareCapital],
                  sharesIssued:[this.results.sharesIssued],

                  deletedBy:['Ann'],
                  deletedTime:[new Date()],
                  deletedFlag:['Y'],
                  verifiedBy:[this.results.verifiedBy],
                  verifiedTime:[this.results.verifiedTime],
                  verifiedFlag:[this.results.verifiedFlag],
                  postedBy:[this.results.postedBy],
                  postedTime:[this.results.postedTime],
                  postedFlag:[this.results.postedFlag],
                  modifiedBy:[this.results.modifiedBy],
                  modifiedTime:[this.results.modifiedTime],
                  sn:[this.results.sn]
  
  
                });
              }
            )
            this.disabledFormControl();
            }
          
    }
  onSubmit() {
    console.log("form data before validator", this.formData.value);
    
  
      this.submitted = true;
      // stop here if form is invalid
      if (this.formData.valid){
        if(this.message.function_type == "A-Add"){
          console.log(this.formData.value);
          
           this.collateralService.createCollateral(this.formData.value).subscribe(res=>{
             console.log(res);
             
           this.results = res;
           console.log(this.results);
           
            this._snackBar.open("Executed Successfully!", "X", {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000,
              panelClass: ['green-snackbar','login-snackbar'],
            });
        },err=>{
          this.error = err;
          this._snackBar.open(this.error, "Try again!", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
            panelClass: ['red-snackbar','login-snackbar'],
          });
        })
        }else if(this.function_type == "M-Modify"){
          // this.eventId = this.activatedRoute.snapshot.paramMap.get('event_id');
          // this.collaterals: = this.route.snapshot.
          console.log(this.message.entity);
          console.log("This formData",this.formData.value);
          
          this.collateralService.updateCollateral(this.formData.value).subscribe(res=>{
            console.log(this.message.entity);
            console.log(res);
            console.log(this.formData.value);
            
            this.results = res;
              this._snackBar.open("Executed Successfully!", "X", {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 3000,
                panelClass: ['green-snackbar','login-snackbar'],
              });
          },err=>{
            this.error = err;
            this._snackBar.open(this.error, "Try again!", {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000,
              panelClass: ['red-snackbar','login-snackbar'],
            });
          })  
        }else if(this.function_type == "D-Delete"){
          console.log("formdata", this.formData.value);
          
          this.collateralService.updateCollateral(this.formData.value).subscribe(res=>{
            this.results = res;
            console.log(this.results);
            
              this._snackBar.open("Deleted Successfully!", "X", {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 3000,
                panelClass: ['green-snackbar','login-snackbar'],
              });
          },err=>{
            this.error = err;
            this._snackBar.open(this.error, "Try again!", {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000,
              panelClass: ['red-snackbar','login-snackbar'],
            });
          })

        }

      }else{
      
        this._snackBar.open("Invalid Form Data", "Try again!", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['red-snackbar','login-snackbar'],
        });
      }
  }  

 



}
