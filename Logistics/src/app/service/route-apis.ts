import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RouteApis {
  constructor(private httpclient: HttpClient) { }

  getAllRoutes( ):Observable<any>{
    return this.httpclient.get<any>(`https://localhost:7155/api/v1/Route/GetAllRoutes`);
  }

  getRouteDetails(routeId: string):Observable<any>{
    return this.httpclient.get<any>(`https://localhost:7155/api/v1/Route/GetRouteDetails?routeId=${routeId}`);
  }

  
  
}
