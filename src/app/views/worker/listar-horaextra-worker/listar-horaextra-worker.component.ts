import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-horaextra-worker',
  templateUrl: './listar-horaextra-worker.component.html',
  styleUrls: ['./listar-horaextra-worker.component.css']
})
export class ListarHoraextraWorkerComponent {
  fecha = new Date();
  horaNueva = {
    fechaHoraExtra: Date(),
    cantidad_horas: 0,
    costo_hora: 0.0,
  }
  idTrabajador: any;
  trabajadores = [];
  listaHoras: any = [];
  UsuarioObtenido: any;
  trabajadorObtenido: any;

  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal, private apiLogin: LoginNa2Service) { }
  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data;
        this.apiService.listarHorasExtraTrabajador(this.trabajadorObtenido.id).subscribe(
          (data) => {
            this.listaHoras = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
