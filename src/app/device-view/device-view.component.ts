import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit, OnDestroy {

  devices: any[];
  deviceSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();

  }
  onSwitchOnAll(){
    this.deviceService.switchOnAll();
  }

  onSwitchOffAll(){
    this.deviceService.switchOffAll();
  }

  ngOnDestroy(): void {
    this.deviceSubscription.unsubscribe();
  }
}
