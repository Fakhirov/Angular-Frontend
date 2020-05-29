export class DeviceService{
  devices = [
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
    console.log('getDeviceById begins');
    const device = this.devices.find((dev) => dev.id === idOfTheDevice);
    return device;
  }
}
