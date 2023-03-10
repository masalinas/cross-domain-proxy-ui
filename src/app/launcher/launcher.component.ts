import { Component, OnInit, OnDestroy } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-launcher',
  templateUrl: 'launcher.component.html',
  styleUrls: ['launcher.component.css'],  
})
export class LauncherComponent implements OnInit {
  private receptorTemplate: string = "http://localhost:4300/receptor.html";
  private receptorFrame: any;
  private sampleToken: any;

  constructor(private cookieService: CookieService) {    
  }

  ngOnInit() {
    this.createReceptorFrame();
  }

  private createReceptorFrame() {
    // define a new iframe for the receptor template
    let body = document.getElementsByTagName('body')[0];

    this.receptorFrame = document.createElement('iframe');
    this.receptorFrame.setAttribute('id', 'receptor');
    this.receptorFrame.setAttribute('style', 'display: none;');
    this.receptorFrame.setAttribute('src', this.receptorTemplate);
    
    // add onload event module frame
    let safe = this;
    this.receptorFrame.onload = function () {
      safe.postModuleMessage();
    };

    body.appendChild(this.receptorFrame);
 }

  private postModuleMessage() {
    // recover token from sample cookie
    this.sampleToken = this.cookieService.get('token');

    let event = JSON.stringify({ token: this.sampleToken });
    
    // send sample cookie to receptor template
    this.receptorFrame.contentWindow.postMessage(event, '*');
    
    // redirect to main view to show sample token included in the cookie
    window.location.href = "http://localhost:4300";
  }
}
