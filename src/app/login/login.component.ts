import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getUname='';
  getUpass='';

  constructor(private router:Router) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.getUname = data.value.uname;
    this.getUpass = data.value.upass;

    if(this.getUname == "admin" && this.getUpass == "admin123")
    {
      alert('Login Success');

      const sid = 'admin123';
      localStorage.setItem('x',sid);

      this.router.navigateByUrl('welcome');

    }
    else
    {
      alert('Login Unsuccessfull')
    }
  }

  ngOnInit() {
  }

}
