import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address';
import {AddressService} from '../../services/address.service';
import {ActivatedRoute} from '@angular/router';
import {Driver} from '../../models/Driver';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address: Address;
  drivers: string;
  constructor(private addressService: AddressService,
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

}
