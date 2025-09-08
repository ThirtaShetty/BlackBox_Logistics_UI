import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { ManageLoads } from '../manage-loads/manage-loads';

@Component({
  selector: 'app-route-details',
  imports: [CommonModule,Button,ManageLoads],
  templateUrl: './route-details.html',
  styleUrl: './route-details.scss'
})
export class RouteDetails {
  loadsCount:number = 3;
  showAssignButton:boolean = true;
  route = {
    routeId: 'R-101',
    routeStatus: 'In Transit'
  };
  stops = [
    { label: 'Pick up 1', hub: 'Hub: Lorem 1' },
    { label: 'Pick up 2', hub: 'Hub: Lorem 2' },
    { label: 'Pick up 3', hub: 'Hub: Lorem 3' },
    { label: 'Drop 1', hub: 'Hub: Lorem 4' },
    { label: 'Drop 2', hub: 'Hub: Lorem 5' }
  ];
  constructor() {
    const routeId = window.location.pathname.split('/').pop();
    console.log('Route ID:', routeId);
  }


  ngOnInit() {
    //this.getStops();
  }

  // getStops(){
  //   this.stops = [];
  //   const pickupPointsList = this.route.routePickupPoints.split(',');
  //   const dropPointsList = this.route.routeDropPoints.split(',');
  //   for(let i=1; i<=pickupPointsList.Length; i++){
  //     this.stops.push({label: 'Pick up '+i, hub: pickupPointsList[i]});
  //   }
  //   for(let i=1; i<=dropPointsList.Length; i++){
  //     this.stops.push({label: 'Drop '+i, hub: dropPointsList[i]});
  //   }
  // }


  assignTruck=()=> {
    alert('Truck Assigned!');
  }
}
