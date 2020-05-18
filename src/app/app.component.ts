import { Component } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  devices = [
    {
      name: 'washing machine',
      status: 'switched-on'
    },
    {
      name: 'laptop',
      status: 'switched-off'
    },
    {
      name: 'smartphone',
      status: 'switched-on'
    }
  ];

  constructor() {
    setTimeout(
      () => {
      this.isAuth = true;
    }, 4000);
  }

  onSwitchOn(){
    console.log('switch on all devices!');
  }
}
