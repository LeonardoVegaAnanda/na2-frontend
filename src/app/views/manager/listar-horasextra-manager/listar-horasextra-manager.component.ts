import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-horasextra-manager',
  templateUrl: './listar-horasextra-manager.component.html',
  styleUrls: ['./listar-horasextra-manager.component.css']
})
export class ListarHorasextraManagerComponent {
  fecha = new Date();
  horaNueva = {
    fechaHoraExtra: Date(),
    cantidad_horas: 0,
    costo_hora: 0.0,
  }
  idTrabajador: any;
  trabajadores = [];
  listaHoras: any = [];

  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal) { }
  ngOnInit(): void {
    this.apiService.listarHoras().subscribe(
      (data) => {
        this.listaHoras = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerHoraExtraDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarHorasExtrasDia(latest_date).subscribe(
      (data: any) => {
        this.listaHoras = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalHora(crearHora) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearHora);
  }

  crearHoraExtraClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Hora",
      text: "¿Desea generar la hora extra?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Generar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.horaNueva.fechaHoraExtra, 'yyyy-MM-dd');
          this.horaNueva.fechaHoraExtra = latest_date;
          console.log(this.idTrabajador, this.horaNueva.fechaHoraExtra);
          this.apiService.crearHoraExtra(this.horaNueva, this.idTrabajador).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al crear la hora","success")
              this.modal.dismissAll();
              console.log(data)
              this.ngOnInit();
            },
            (error) => {
              Swal.fire("Error","Error al crear la hora","error")
              console.log(error);
            }
          );
        }
      });
  }
}
