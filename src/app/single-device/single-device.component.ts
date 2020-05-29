import { Component, OnInit } from '@angular/core';
import { DeviceService} from '../services/device.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {
  name: string = 'device';
  status: string = 'Status';
  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const device = this.deviceService.getDeviceById(+id);
    this.name = device.name;
    this.status = device.status;
  }
}
