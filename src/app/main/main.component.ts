import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],  
})
export class MainComponent implements OnInit {
  private tokenLenght: number = 10;
  public sampleToken: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  constructor(private router: Router,
              private cookieService: CookieService) {    
  }

  generateString(length: number) {
    return Math.random().toString(20).substr(2, length);
  }

  saveCookie() {
    this.sampleToken = this.generateString(this.tokenLenght);

    this.cookieService.set('token', this.sampleToken);
  }

  ngOnInit() {
    this.saveCookie();
  }

  onRefreshCookie (event: any){
    this.sampleToken = this.generateString(this.tokenLenght);

    this.saveCookie();
  }
  
  onRouteToNGDMS(event: any) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/launcher');      
    });
  }
}
