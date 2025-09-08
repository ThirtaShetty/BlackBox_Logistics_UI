import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignmentApis {
  constructor(private httpclient: HttpClient) { }
  
  getHubspotName(pincode: string):Observable<any>{
    return this.httpclient.get<string>(`https://localhost:7155/api/v1/Assignment/AssignHubspot?pincode=${pincode}`);
  }

  assignTruckToRoute(assignmentDetails: any):Observable<any>{
    return this.httpclient.post<any>(`https://localhost:7155/api/v1/Assignment/AssignTruckForLocation`,assignmentDetails);
  }

  assignLoadsToRoute(assignmentDetails: any):Observable<any>{
    return this.httpclient.post<any>(`https://localhost:7155/api/v1/Assignment/AssignLoadsToRoute`,assignmentDetails);
  }
    
}
