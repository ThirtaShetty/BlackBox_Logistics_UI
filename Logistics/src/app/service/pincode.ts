import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pincode {
  constructor(private httpclient: HttpClient) { }
  
  getPincodeDetails(pincode: string):Observable<any>{
    return this.httpclient.get<any>(`https://api.postalpincode.in/pincode/${pincode}`);
  }  
}
