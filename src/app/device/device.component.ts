import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() status: string;

  constructor() { }

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
}
