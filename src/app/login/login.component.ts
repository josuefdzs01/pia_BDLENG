import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _authService: AuthServiceService,
    private _router: Router,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this._spinner.show()
    const{email, password} = this.loginForm.value;
    let data = {
      email_consul: email,
      password_consul: password
    }
    console.log(data);
    this._authService.loginConsultorio(data).then((response:any) => {
      console.log(response);
      if(response.StatusCode == 200){
        this._toastr.success('Inicio sesión con exito');
        this._spinner.hide();
        this._router.navigate(['/dashboardConsultorio']);
      }else{
        this._toastr.error('Hubo un error al iniciar sesion, intenta nuevamente');
        this._spinner.hide();
      }
    })
  }

}
