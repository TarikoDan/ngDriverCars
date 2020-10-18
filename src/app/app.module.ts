import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { DriverComponent } from './components/driver/driver.component';
import { CarComponent } from './components/car/car.component';
import {RouterModule, Routes} from '@angular/router';
import { AllDriversComponent } from './components/all-drivers/all-drivers.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { LicenseComponent } from './components/license/license.component';
import { AllLicensesComponent } from './components/all-licenses/all-licenses.component';
import { AllAddressesComponent } from './components/all-addresses/all-addresses.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {path: 'drivers', component: AllDriversComponent},
  {path: 'drivers/:id', component: DriverComponent},
  {path: 'licenses', component: AllLicensesComponent},
  {path: 'licenses/:id', component: LicenseComponent},
  {path: 'cars', component: AllCarsComponent},
  {path: 'cars/:id', component: CarComponent},
  {path: 'addresses', component: AllAddressesComponent},
  {path: 'addresses/:id', component: AddressComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    CarComponent,
    AllDriversComponent,
    AllCarsComponent,
    LicenseComponent,
    AllLicensesComponent,
    AllAddressesComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
