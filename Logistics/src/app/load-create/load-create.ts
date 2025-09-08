import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../shared/button/button';
import { CommonModule } from '@angular/common';
import { Pincode } from '../service/pincode';
import { AssignmentApis } from '../service/assignment-apis';
import { LoadApis } from '../service/load-apis';

@Component({
  selector: 'app-load-create',
  imports: [Button,CommonModule,ReactiveFormsModule],
  templateUrl: './load-create.html',
  styleUrl: './load-create.scss'
})
export class LoadCreate {
  loadForm:FormGroup
  apiUrl: string = 'https://api.postalpincode.in/pincode/';
  constructor(private fb: FormBuilder, private pincodeService: Pincode,private assignmentApis : AssignmentApis, private loadApis: LoadApis) {

    this.loadForm = this.fb.group({
      // Load details
      loadId: ['', Validators.required],
      loadRegDateTime: ['', Validators.required],
      loadType: ['', [Validators.required, Validators.maxLength(10)]],
      loadWeight: [''],
      loadStatus: ['UnAssigned', Validators.required],

      // Payment details
      loadPaymentStatus: ['Pending', Validators.required],
      loadPaymentAmount: [''],
      loadPaymentMode: [''],

      // Pickup details
      pickupName: ['', Validators.required],
      pickupEmailId: ['', [Validators.required, Validators.email]],
      pickupContactNo: ['', Validators.required],
      pickupPincode: ['', Validators.required],
      pickupCountry: ['', Validators.required],
      pickupState: ['', Validators.required],
      pickupDistrict: ['', Validators.required],
      pickupCity: ['', Validators.required],
      pickupAddress: ['', Validators.required],

      // Drop details
      dropName: ['', Validators.required],
      dropEmailId: ['', [Validators.required, Validators.email]],
      dropContactNo: ['', Validators.required],
      dropPincode: ['', Validators.required],
      dropCountry: ['', Validators.required],
      dropState: ['', Validators.required],
      dropDistrict: ['', Validators.required],
      dropCity: ['', Validators.required],
      dropAddress: ['', Validators.required],

      // Hubspot
      loadPickupHubspot: [''],
      loadDropHubspot: [''],
    });
  }

  onPickupPincodeTyping=(event: any)=>{
    const pincode = event.target.value;
    if(pincode.length === 6){
      this.pincodeService.getPincodeDetails(pincode).subscribe(
        (response) => {
          if (response && response[0] && response[0].Status === 'Success') {
            const postOfficeData = response[0].PostOffice[0];
            this.assignmentApis.getHubspotName(pincode).subscribe(
              (res)=>{
                if(res != null){
                  this.loadForm.patchValue({
                    pickupCountry: postOfficeData.Country,
                    pickupState: postOfficeData.State,
                    pickupDistrict: postOfficeData.District,
                    pickupCity: postOfficeData.Name || postOfficeData.Region || '',
                    loadPickupHubspot: res
                  });
                }
              }
            );
            
          } 
          else {
            alert('Invalid Pincode');
          }
        },
        (error) => {
          console.error('Error fetching pincode data:', error);
        }
      );
    }
  }

  onDropPincodeTyping=(event: any)=>{
    const pincode = event.target.value;
    if(pincode.length === 6){
      this.pincodeService.getPincodeDetails(pincode).subscribe(
        (response) => {
          if (response && response[0] && response[0].Status === 'Success') {
            const postOfficeData = response[0].PostOffice[0];
            this.assignmentApis.getHubspotName(pincode).subscribe(
              (res)=>{
                if(res != null){
                this.loadForm.patchValue({
                  dropCountry: postOfficeData.Country,
                  dropState: postOfficeData.State,
                  dropDistrict: postOfficeData.District,
                  dropCity: postOfficeData.Name || postOfficeData.Region || '',
                  loadDropHubspot: res
              }
            );
          }
        }
      );
          } 
          else {
            alert('Invalid Pincode');
          }
        },
        (error) => {
          console.error('Error fetching pincode data:', error);
        }
      );
    }
  }


  createLoad=()=>{
    this.loadForm.patchValue({
      loadId: 'LOAD-' + Math.floor(1000 + Math.random() * 90).toString(),
      loadRegDateTime: new Date().toISOString(),
      loadStatus: 'UnAssigned'   
  })
    if(this.loadForm.valid){
      console.log(this.loadForm.value);
      this.loadApis.createLoad(this.loadForm.value).subscribe(
        (response)=> {
          if(response){
            alert(response.message);
          }
        }
      )
    } 
    else {
      alert('Please fill all required fields correctly.');
    }
  }

}
