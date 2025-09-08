import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { Router } from '@angular/router';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, Card],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  constructor(private router: Router) {}

  goToTruckerLanding=()=>{
    this.router.navigate(['/trucker-login']);
  }

  goToDispatcherLanding=()=>{
    this.router.navigate(['/dispatcher-login']);
  }

}
