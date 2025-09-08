import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadApis {
  constructor(private httpclient: HttpClient) { }
  
  createLoad(load: any):Observable<any>{
    return this.httpclient.put<any>(`https://localhost:7155/api/v1/Load/CreateLoadDetails`,load);
  }

  getLoadDetailsForStatus(loadStatus: string):Observable<any>{
    return this.httpclient.get<any>(`https://localhost:7155/api/v1/Load/GetLoadDetailsForStatus?loadStatus=${loadStatus}`);
  }

  getLoadDetailsForRoute(routeLoadIds: string[]):Observable<any>{
    return this.httpclient.post<any>(`https://localhost:7155/api/v1/Load/GetLoadDetailsForRoute`,routeLoadIds);
  }
}
