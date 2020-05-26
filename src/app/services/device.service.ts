export class DeviceService{
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
}
