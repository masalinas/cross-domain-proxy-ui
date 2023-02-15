import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],  
})
export class MainComponent implements OnInit {
  public sampleToken: string = 'vvergerg6eGDBbdBD';
  
  constructor(private router: Router,
              private cookieService: CookieService) {    
  }

  ngOnInit() {
    this.cookieService.set('token', this.sampleToken);
  }

  handleClick(event: any) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/launcher');      
    });
  }
}
