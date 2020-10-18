import {Component, DoCheck, OnInit} from '@angular/core';
import {Driver} from '../../models/Driver';
import {DriversService} from '../../services/drivers.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../models/Address';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css']
})
export class AllDriversComponent implements OnInit {
  drivers: Driver[];
  addresses: Address[];
  newDriverForm: FormGroup;
  isActive = false;

  constructor(private driversService: DriversService,
              private addressService: AddressService,
              private fb: FormBuilder) {
    this.driversService.getAll().subscribe(value => this.drivers = value);
    this.addressService.getAll().subscribe(value => this.addresses = value);
  }

  addNew(): void{
    this.isActive = !this.isActive;
  }
  ngOnInit(): void {
    this.newDriverForm = this.fb.group({
      name: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-ZА-яЁёЇїъіІ]*$')
      ]),
      email: this.fb.control(null, [
        Validators.required,
        Validators.email
      ]),
      address: this.fb.control(null)
    });
  }

  postDriver(): void {
    const formData = this.newDriverForm.value;
    if (formData.address) {
      const parse = JSON.parse(formData.address);
      this.driversService.postWithAddress(formData, parse.id.toString())
        .subscribe(
          res => {
            console.log(res);
            this.drivers.push(res);
          },
          error => alert(error)
        );
    }else {
      this.driversService.post(formData).subscribe(
        res => {
          console.log(res);
          this.drivers.push(res);
        },
        error => alert(error)
      );
    }
    this.newDriverForm.reset();
  }
}
