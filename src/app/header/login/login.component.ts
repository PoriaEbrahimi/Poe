import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', { 
        updateOn: 'blur', 
        validators: [Validators.required, Validators.email] 
      }),
      password: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    })
    
  }

  onLoginSubmit() {
    if(!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({ email, password }));
  }

}
