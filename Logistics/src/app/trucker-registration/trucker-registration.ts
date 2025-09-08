import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../shared/button/button';
import { Pincode } from '../service/pincode';
import { TruckApis } from '../service/truck-apis';
import { Router } from '@angular/router';
import { AssignmentApis } from '../service/assignment-apis';

@Component({
  selector: 'app-trucker-registration',
  imports: [Button,ReactiveFormsModule],
  templateUrl: './trucker-registration.html',
  styleUrl: './trucker-registration.scss'
})
export class TruckerRegistration {
  truckForm!: FormGroup;

  constructor(private fb: FormBuilder, private pincodeService: Pincode, private truckApis: TruckApis, private router: Router, private assignmentApis: AssignmentApis) {
    this.truckForm = this.fb.group({
      truckId: ['', Validators.required],
      truckRegDateTime: ['', Validators.required],
        truckVehicleNumber: ['', Validators.required],
        truckVehicleModel: ['', Validators.required],
        truckVehicleCapacity: ['', [Validators.required, Validators.min(0)]],


        driverName: ['', Validators.required],
        driverEmailId: ['', [Validators.required, Validators.email]],
        driverContactNo: ['', Validators.required],
        driverStatus: ['', Validators.required],
        driverLicenseNo: ['', Validators.required],

    

        homeLocationPincode: ['', Validators.required],
        homeLocationCountry: ['', Validators.required],
        homeLocationState: ['', Validators.required],
        homeLocationDistrict: ['', Validators.required],
        homeLocationCity: ['', Validators.required],
        homeLocationAddress: ['', Validators.required],
  
  
        currentLocationPincode: ['', Validators.required],
        currentLocationCountry: [''],
        currentLocationState: [''],
        currentLocationDistrict: [''],
        currentLocationCity: [''],
        currentLocationHubspot: ['']
    });
  }

  onHomePincodeTyping=(event: any)=>{
    const pincode = event.target.value;
    if(pincode.length === 6){
      this.pincodeService.getPincodeDetails(pincode).subscribe(
        (response) => {
          if (response && response[0] && response[0].Status === 'Success') {
            const postOfficeData = response[0].PostOffice[0];
            this.truckForm.patchValue({
              homeLocationCountry: postOfficeData.Country,
              homeLocationState: postOfficeData.State,
              homeLocationDistrict: postOfficeData.District,
              homeLocationCity: postOfficeData.Name || postOfficeData.Region || '',
            });
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


  onCurrentPincodeTyping=(event: any)=>{
    const pincode = event.target.value;
    if(pincode.length === 6){
      this.pincodeService.getPincodeDetails(pincode).subscribe(
        (response) => {
          if (response && response[0] && response[0].Status === 'Success') {
            const postOfficeData = response[0].PostOffice[0];
            this.assignmentApis.getHubspotName(pincode).subscribe(
              (res)=>{
                if(res != null){
                  this.truckForm.patchValue({
                    currentLocationCountry: postOfficeData.Country,
                    currentLocationState: postOfficeData.State,
                    currentLocationDistrict: postOfficeData.District,
                    currentLocationCity: postOfficeData.Name || postOfficeData.Region || '',
                    currentLocationHubspot: res
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


  registerTruck=()=>{
    this.truckForm.patchValue({
      truckId: 'TRK-' + Math.floor(1000 + Math.random() * 90).toString(),
      truckRegDateTime: new Date().toISOString(),
      driverStatus: 'Active'
    });
    if(this.truckForm.valid){
      console.log(this.truckForm.value);
      this.truckApis.createTruck(this.truckForm.value).subscribe(
        (response) => {
          if(response.isSuccess){
            console.log('Truck registered successfully:', response);  
            alert('Truck Registered Successfully!');
          }
          else{
            alert('Truck Registeration Failed!');
          }
          this.router.navigate(['/trucker-login']);

          
      });
    }
    else {
      alert('Please fill all required fields correctly.');
    }
  }
}
