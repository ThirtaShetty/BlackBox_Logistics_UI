import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-dispatcher-landing',
  imports: [CommonModule,Button],
  templateUrl: './dispatcher-landing.html',
  styleUrl: './dispatcher-landing.scss'
})
export class DispatcherLanding {
  constructor(private router : Router) {}

  goToCreateLoadPage=()=>{
    this.router.navigate(['/create-load']);
  }

  goToManageRoutesPage=()=>{
    this.router.navigate(['/manage-routes']);
  }

  goToTrackLoadPage=()=>{
    this.router.navigate(['/manage-loads']);
  }

}
