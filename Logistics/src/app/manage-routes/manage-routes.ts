import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-routes',
  imports: [CommonModule],
  templateUrl: './manage-routes.html',
  styleUrl: './manage-routes.scss'
})
export class ManageRoutes {
  constructor(private router : Router) {}
  routes = [
    {
      routeId: 'R-101',
      routeLoadIds: 'L-003, L-014, L-022',
      routeTotalWeight: '850 kg',
      routeDriverName: 'Ravi Sharma',
      routeDriverContact: '+91 98765 43210',
      routeStartHubspot: 'Warehouse A\nNavi Mumbai, 410210, Maharashtra',
      routeEndHubspot: 'Powai Hub\nMumbai, 400076, Maharashtra',
      routeStatus: 'Delivered'
    },
    {
      routeId: 'R-102',
      routeLoadIds: 'L-003, L-014, L-022',
      routeTotalWeight: '850 kg',
      routeDriverName: 'Ravi Sharma',
      routeDriverContact: '+91 98765 43210',
      routeStartHubspot: 'Warehouse A\nNavi Mumbai, 410210, Maharashtra',
      routeEndHubspot: 'Powai Hub\nMumbai, 400076, Maharashtra',
      routeStatus: 'In Transit'
    },
    {
      routeId: 'R-099',
      routeLoadIds: 'L-030',
      routeTotalWeight: '890 kg',
      routeDriverName: 'Imran Khan',
      routeDriverContact: '+91 90000 11122',
      routeStartHubspot: 'Turbhe Yard\nNavi Mumbai, 400705, Maharashtra',
      routeEndHubspot: 'BKC Client Site\nMumbai, 400051, Maharashtra',
      routeStatus: 'Created'

    }
  ];

  goToRouteDetails=(routeId:string)=>{
    this.router.navigate(['/route-details', routeId]);
  }
}
