import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouteApis } from '../service/route-apis';

@Component({
  selector: 'app-manage-routes',
  imports: [CommonModule],
  templateUrl: './manage-routes.html',
  styleUrl: './manage-routes.scss'
})
export class ManageRoutes {
  routes:any
  constructor(private router : Router, private routeApis :RouteApis) {
    this.routeApis.getAllRoutes().subscribe(
      (response) => {
        this.routes = response
      }
    )
  }


  goToRouteDetails=(routeId:string)=>{
    this.router.navigate(['/route-details', routeId]);
  }
}
