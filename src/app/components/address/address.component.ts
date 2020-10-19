import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address';
import {AddressService} from '../../services/address.service';
import {ActivatedRoute} from '@angular/router';
import {Driver} from '../../models/Driver';
import {DriversService} from '../../services/drivers.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address: Address;
  drivers: string;
  driversList: Driver[];

  constructor(private addressService: AddressService,
              private driversService: DriversService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.addressService.getById(data.id).subscribe(value => {
          this.address = value;
          this.drivers = JSON.stringify(value.drivers);
        });
    });
  }

  ngOnInit(): void {
  }
  showDrivers(): void {
    this.driversService.getByAddress(this.address.id.toString()).subscribe(value => {
      this.driversList = value;
    });
  }

}
