import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address';
import {AddressService} from '../../services/address.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Driver} from '../../models/Driver';
import {DriversService} from '../../services/drivers.service';

@Component({
  selector: 'app-all-addresses',
  templateUrl: './all-addresses.component.html',
  styleUrls: ['./all-addresses.component.css']
})
export class AllAddressesComponent implements OnInit {

  addresses: Address[];
  newAddressForm: FormGroup;
  isActive: boolean;
  drivers: Driver[];
  withAddress = false;

  constructor(private addressService: AddressService,
              private driversService: DriversService,
              private fb: FormBuilder) {
    this.addressService.getAll().subscribe(value => this.addresses = value);
    this.driversService.getAll().subscribe(value => this.drivers = value);
  }

  ngOnInit(): void {
    this.newAddressForm = this.fb.group({
      postCode: this.fb.control(null, [
        Validators.required,
        Validators.pattern('[0-9]{5}')
      ]),
      city: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-ZА-яЁёЇїъіІ]*$')
      ]),
      street: this.fb.control(null, [
        Validators.required,
      ]),
      houseNumber: this.fb.control(null, [
        Validators.required,
      ]),
      driver: this.fb.control(null)
    });
  }
  addNew(): void{
    this.isActive = !this.isActive;
  }


  postAddress(): void {
    const formData = this.newAddressForm.value;
    if (formData.driver) {
      const driverId = JSON.parse(formData.driver).id;
      this.addressService.postWithDriver(formData, driverId)
        .subscribe(
          res => {
            console.log(res);
            this.addresses.push(res);
          },
          error => alert(error)
        );
    }else {
      this.addressService.post(formData)
        .subscribe(
          res => {
            console.log(res);
            this.addresses.push(res);
          },
          error => alert(error)
        );
    }
  }
}
