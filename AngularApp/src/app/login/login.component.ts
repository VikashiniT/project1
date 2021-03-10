import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  email! : string;
  password!: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logIn()
  {
    if(this.email == "admin@gmail.com" && this.password == "Admin@123"){
      this.router.navigate(['employee']);
    }
    else{
      alert("Enter valid details");
    }
  }
}
