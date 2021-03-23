import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-registration',
  templateUrl: './td-registration.component.html',
  styleUrls: ['./td-registration.component.css']
})
export class TdRegistrationComponent implements OnInit {
  myData = []
  formData: any;
  constructor() { }

  ngOnInit(): void {
  }
  submitData(formData: any) {
    this.myData.push(formData)
    //console.log(formData)
  }
}
