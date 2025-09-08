import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule,Button],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  identity : string = "";
  constructor(private router : Router) { 
  }

  ngOnInit(): void {
    this.identity  = this.router.url.includes('truck') ? 'Trucker' : 'Dispatcher';
  }

  onLoginSubmit=()=>{
    if(this.identity === 'Trucker'){
      this.router.navigate(['/trucker-dashboard']);
    } else {
      this.router.navigate(['/dispatcher-landing']);
    }
  }

  onRegister=()=>{
    this.router.navigate(['/trucker-registration']);
  }

}
