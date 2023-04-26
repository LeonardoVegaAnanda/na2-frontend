import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-tareas-admin',
  templateUrl: './listar-tareas-admin.component.html',
  styleUrls: ['./listar-tareas-admin.component.css']
})
export class ListarTareasAdminComponent {
  fecha=new Date();
  trabajadores=[];
  listaTareas:any=[];
  tareaNueva={
    nombre:'',
    fecha:Date(),
    estatus:'Sin Empezar',
  }
  idTrabajador:any;
  constructor(private datepipe:DatePipe,private apiService:ApiNa2Service,private modal:NgbModal){}
  ngOnInit(): void {
    this.apiService.listarTareas().subscribe(
      (data) =>{
        this.listaTareas = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  obtenerTareaDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarTareasDia(latest_date).subscribe(
      (data: any) => {
        this.listaTareas = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalEvento(crearEvento) {
    this.apiService.listarTrabajadores().subscribe(
      (data:any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearEvento);
  }

  crearEventoClick() {
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
}
