import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCmpComponent } from './my-first-cmp/my-first-cmp.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuardService], component: DeviceViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuardService], component: SingleDeviceComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditDeviceComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: 'devices' , pathMatch: 'full'},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCmpComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOhFourComponent,
    EditDeviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DeviceService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
