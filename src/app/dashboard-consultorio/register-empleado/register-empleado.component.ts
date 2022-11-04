import { Component, OnInit } from '@angular/core';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-register-empleado',
  templateUrl: './register-empleado.component.html'
})
export class RegisterEmpleadoComponent implements OnInit {
  gridView: any[] = [];
  
  constructor(private _consultorio: ConsultorioService) { }

  ngOnInit(): void {
    this.getAllEmpleados()
  }

  getAllEmpleados(){
    this._consultorio.getAllEmpleados().then((response:any) => {
      console.log(response)
      this.gridView = response;
    })
  }

}
