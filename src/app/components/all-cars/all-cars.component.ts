import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/Car';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars: Car[];
  newCarForm: FormGroup;
  isActive = false;

  constructor(private carService: CarService,
              private fb: FormBuilder) {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  addNew(): void{
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    this.newCarForm = this.fb.group({
      model: this.fb.control(null, [
        Validators.required
      ]),
      year: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(4)
      ])
    });
  }

  post(): void {
    const id = prompt('Enter Driver Id:');
    this.carService.post(id, this.newCarForm.value).subscribe(
      res => console.log(res),
      error => alert(error)
    );
    this.newCarForm.reset();
  }
}
