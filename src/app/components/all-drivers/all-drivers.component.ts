import { Component, OnInit } from '@angular/core';
import {Driver} from '../../models/Driver';
import {DriversService} from '../../services/drivers.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css']
})
export class AllDriversComponent implements OnInit {
  drivers: Driver[];
  newDriverForm: FormGroup;
  isActive = false;

  constructor(private driversService: DriversService,
              private fb: FormBuilder) {
    this.driversService.getAll().subscribe(value => this.drivers = value);
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
      ])
    });
  }

  postDriver(): void {
    this.driversService.post(this.newDriverForm.value).subscribe(
      res => console.log(res),
      error => alert(error)
    );
    this.newDriverForm.reset();
  }
}
