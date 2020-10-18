import { Component, OnInit } from '@angular/core';
import {Driver} from '../../models/Driver';
import {ActivatedRoute} from '@angular/router';
import {DriversService} from '../../services/drivers.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driver: Driver;
  editDriverForm: FormGroup;
  isActive = false;

  constructor(private activatedRoute: ActivatedRoute,
              private driverService: DriversService,
              private fb: FormBuilder) {
    this.activatedRoute.params.subscribe(param =>
      this.driverService.getById(param.id).subscribe(value =>
      this.driver = value)
    );
  }

  edit(): void{
    this.isActive = !this.isActive;
    this.editDriverForm = this.fb.group({
      name: this.fb.control(this.driver?.name, [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-ZА-яЁёЇїъіІ]*$')
      ]),
      email: this.fb.control(this.driver?.email, [
        Validators.required,
        Validators.email
      ]),
    });

  }
  ngOnInit(): void {
  }
  put(): void {
    this.driverService.put(this.driver.id.toString(), this.editDriverForm.value).subscribe(
      res => console.log(res),
      error => alert(error)
    );
    this.editDriverForm.reset();
  }

  remove(): void {
    this.driverService.remove(this.driver.id.toString());
  }
}
