import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html'
})
export class LoginEmpleadoComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _router: Router,
    private _authService: AuthServiceService,
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
    this._authService.loginEmpleado(data).then((response:any) => {
      console.log(response);
      if(response.StatusCode == 200){
        this._toastr.success('Inicio sesión con exito');
        this._spinner.hide();
        this._router.navigate(['/dashboard']);
      }else{
        this._toastr.error('Hubo un error al iniciar sesion, intenta nuevamente');
        this._spinner.hide();
      }
    })
  }

}
