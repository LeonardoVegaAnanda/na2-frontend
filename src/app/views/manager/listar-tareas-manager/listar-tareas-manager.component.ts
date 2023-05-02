import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-tareas-manager',
  templateUrl: './listar-tareas-manager.component.html',
  styleUrls: ['./listar-tareas-manager.component.css']
})
export class ListarTareasManagerComponent {
  fecha = new Date();
  trabajadores = [];
  listaTareas: any = [];
  tareaNueva = {
    nombre: '',
    fecha: Date(),
    estatus: 'Sin Empezar',
  }
  idTrabajador: any;
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal) { }
  ngOnInit(): void {
    this.apiService.listarTareas().subscribe(
      (data) => {
        this.listaTareas = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  obtenerTareaDate() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Tareas",
      text: "¿Desea buscar la lista de tareas?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
          this.apiService.listarTareasDia(latest_date).subscribe(
            (data: any) => {
              this.listaTareas = data;
              Swal.fire("Exito","Exito al obtener la lisdta de tareas","success");
            },
            (error) => {
              console.log(error)
            }
          );
        }
      });
  }

  abrirModalTarea(crearTarea) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearTarea);
  }

  crearTareaClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Administrador",
      text: "¿Desea crear al administrador?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.tareaNueva.fecha, 'yyyy-MM-dd');
          this.tareaNueva.fecha = latest_date;
          this.apiService.crearTarea(this.tareaNueva, this.idTrabajador).subscribe(
            (data) => {
              this.modal.dismissAll();
              console.log(data)
              this.ngOnInit();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
  }
}
