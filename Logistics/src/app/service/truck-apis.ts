import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TruckApis {
  constructor(private httpclient: HttpClient) { }
  
  createTruck(truck: any):Observable<any>{
    return this.httpclient.put<any>(`https://localhost:7155/api/v1/Truck/CreateTruckDetails`,truck);
  }

  getTruckDetails(truckId: string):Observable<any>{
    return this.httpclient.get<any>(`https://localhost:7155/api/v1/Truck/getTruckDetails?truckId=${truckId}`);
  }
}
