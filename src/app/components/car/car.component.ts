import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/Car';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: Car;
  editCarForm: FormGroup;
  isActive = false;

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private fb: FormBuilder) {
    this.activatedRoute.params.subscribe(param =>
      this.carService.getById(param.id).subscribe(value =>
        this.car = value)
    );
  }

  edit(): void{
    this.isActive = !this.isActive;
    this.editCarForm = this.fb.group({
      model: this.fb.control(this.car?.model, [
        Validators.required
      ]),
      year: this.fb.control(this.car?.year, [
        Validators.required,
        Validators.maxLength(4)
      ])
    });

  }
  ngOnInit(): void {
  }
  put(): void {
    this.carService.put(this.car.id.toString(), this.editCarForm.value).subscribe(
      res => console.log(res),
      error => alert(error)
    );
    this.editCarForm.reset();
  }
}
