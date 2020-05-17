import { Component } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  deviceOne = 'washing machine';
  deviceTwo = 'laptop';
  deviceThree = 'smartphone';

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
