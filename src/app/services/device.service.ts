import { Subject} from 'rxjs';

export class DeviceService{

  deviceSubject = new Subject<any []>();
  private devices = [
    {
      id: 1,
      name: 'washing machine',
      status: 'switched-on'
    },
    {
      id: 2,
      name: 'laptop',
      status: 'switched-off'
    },
    {
      id: 3,
      name: 'smartphone',
      status: 'switched-on'
    }
  ];

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }
  switchOnAll(){
    for (const dev of this.devices) {
      dev.status = 'switched-on';
    }
  }

  switchOnIndex(index){
    this.devices[index].status = 'switched-on';
  }

  switchOffAll(){
    for(const dev of this.devices) {
      dev.status = 'switched-off';
    }
  }

  switchOffIndex(index){
  this.devices[index].status = 'switched-off';
  }

  getDeviceById(idOfTheDevice: number){
    const device = this.devices.find((dev) => dev.id === idOfTheDevice);
    return device;
  }

  addDevice(name: string, status: string){
    const deviceObject = {
      id: 0,
      name: '',
      status: ''
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices.length + 1;
    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }
}
