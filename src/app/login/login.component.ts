import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getUname='';
  getUpass='';

  constructor() { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.getUname = data.value.uname;
    this.getUpass = data.value.upass;

    if(this.getUname == data.value.uname && this.getUpass == data.value.upass)
    {
      alert('Login Success');
    }
  }

  ngOnInit() {
  }

}
