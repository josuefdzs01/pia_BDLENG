import { ConsultorioService } from './../../../services/consultorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html'
})
export class AddEmpleadoComponent implements OnInit {

  constructor(private _consultorio: ConsultorioService) { }

  ngOnInit(): void {
    
  }
}
