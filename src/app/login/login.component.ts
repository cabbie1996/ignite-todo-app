import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit() { }

  signIn() {
   
      if (this.loginForm.valid) {
        if (this.loginForm.controls.username.value == "ignite" && this.loginForm.controls.password.value == "123456") {
          this.router.navigate(["/dashboard/contact"]);
        }
        else {
          alert("wrong password")
        }
    }
  }
}
