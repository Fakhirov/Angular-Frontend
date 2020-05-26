import { Component, Input, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() status: string;
  @Input() indexOfDevice: number;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.status;
  }

  getColor(){
    if(this.status === 'switched-on'){
      return 'green';
    } else if(this.status === 'switched-off'){
      return 'red';
    }
  }

  onSwitchOn(){
    this.deviceService.switchOnIndex(this.indexOfDevice);
  }

  onSwitchOff(){
    this.deviceService.switchOffIndex(this.indexOfDevice);
  }
}
