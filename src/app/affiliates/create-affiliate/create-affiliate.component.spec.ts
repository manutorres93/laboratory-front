import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAffiliateComponent } from './create-affiliate.component';
import { Component } from '@angular/core';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateAffiliateComponent', () => {
  // let component: CreateAffiliateComponent;
  // let fixture: ComponentFixture<CreateAffiliateComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
      declarations: [CreateAffiliateComponent,]
    }).compileComponents();



  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CreateAffiliateComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // it('Retornar formulario válido', ()=>{
  //   const fixture = TestBed.createComponent(CreateAffiliateComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const name= component.affiliateForm.controls['name']


  //   name.setValue('Manuela Torres')


  //   expect(component.affiliateForm.invalid).toBeTrue();
  // })

  // it('botón guardar afiliado', () => {

  //   const fixture= TestBed.createComponent(CreateAffiliateComponent)
  //   const btnSave= fixture.debugElement.query(By.css('button.save-affiliate'))
  //   btnSave.nativeElement.click()



  // });
});
