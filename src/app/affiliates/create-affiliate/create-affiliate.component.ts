import { Component} from '@angular/core';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css']
})
export class CreateAffiliateComponent {


public affiliateForm:FormGroup = this.fb.group({

  idAffiliate: [],
  name:['', Validators.required],
  age:['',  [Validators.required,Validators.min(0), Validators.max(130)]],
  mail:['', [Validators.required, Validators.email]],

});



  constructor(private affiliatesServicePost: AffiliatesService, private router:Router,
    public dialog: MatDialog, private fb: FormBuilder){}


  createAffiliate (){
    this.affiliatesServicePost.createAffiliate(this.affiliateForm.value).subscribe(dato =>{
      ;})
  }


  onSubmit():void{

    if(this.affiliateForm.invalid) return;
    this.createAffiliate();
    this.openDialog();
  }

  openDialog():void{
    const dialogRef=this.dialog.open(SuccessDialogComponent,{


    });
    dialogRef.afterClosed().subscribe(respuesta=>{

      this.router.navigate(['/affiliates'])
    })
  }



  }




