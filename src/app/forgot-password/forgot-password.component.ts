import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPassword = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _authService: AuthServiceService,
    private _router: Router,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService) { 
    }

  ngOnInit(): void {
  }

  onResetPassword(){
    this._spinner.show();
    const{email,password} = this.forgotPassword.value;
    let data = {
      email_consul: email,
      password_consul: password
    }
  }

}
