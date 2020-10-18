import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-all-addresses',
  templateUrl: './all-addresses.component.html',
  styleUrls: ['./all-addresses.component.css']
})
export class AllAddressesComponent implements OnInit {

  addresses: Address[];
  constructor(private addressServise: AddressService) {
    this.addressServise.getAll().subscribe(value => this.addresses = value);
  }

  ngOnInit(): void {
  }

}
