import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cross Domain Proxy UI';

  handleClick(event: any) {
    console.log(event);
  }
}
