import { Component, OnInit } from '@angular/core';
import {License} from '../../models/License';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LicenseService} from '../../services/license.service';

@Component({
  selector: 'app-all-licenses',
  templateUrl: './all-licenses.component.html',
  styleUrls: ['./all-licenses.component.css']
})
export class AllLicensesComponent implements OnInit {
  licenses: License[];
  newLicenseForm: FormGroup;
  isActive = false;

  constructor(private licenseService: LicenseService,
              private fb: FormBuilder) {
    this.licenseService.getAll().subscribe(value => this.licenses = value);
  }

  addNew(): void{
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    this.newLicenseForm = this.fb.group({
      series: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[A-Z]{2}[a-zA-ZА-яЁёЇїъіІ]*$')
      ]),
      district: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-ZА-яЁёЇїъіІ]*$')
      ]),
      date: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')
      ])
    });
  }

  post(): void {
    const id = prompt('Enter Driver Id:');
    this.licenseService.post(id, this.newLicenseForm.value).subscribe(
      res => console.log(res),
      error => alert(error)
    );
    this.newLicenseForm.reset();
  }
}
