import {Component, OnDestroy, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';
import {Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  seconds: number;
  counterSubscription: Subscription;
  constructor() {
  }

  ngOnInit(): void {
    const count = interval(1000);
    this.counterSubscription = count.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('Error !!!');
      },
      () => {
        console.log('Observable complete !!!');
      }
    );
    }

    ngOnDestroy(): void{
    this.counterSubscription.unsubscribe();
    }
}
