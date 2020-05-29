import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  devices: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.devices = this.deviceService.devices;
  }
  onSwitchOnAll(){
    this.deviceService.switchOnAll();
  }

  onSwitchOffAll(){
    this.deviceService.switchOffAll();
  }
}
