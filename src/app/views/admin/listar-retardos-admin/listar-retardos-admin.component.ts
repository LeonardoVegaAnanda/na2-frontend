import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-retardos-admin',
  templateUrl: './listar-retardos-admin.component.html',
  styleUrls: ['./listar-retardos-admin.component.css']
})
export class ListarRetardosAdminComponent {
  fecha = new Date();
  trabajadores = [];
  listaRetardos: any = [];
  retardo = {
    tiempo_Retardo: 0,
    descuento_retardo: 0,
    fechaRetardo: Date()
  }
  idTrabajador: any;
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal) { }
  ngOnInit(): void {
    this.apiService.listarRetardos().subscribe(
      (data) => {
        this.listaRetardos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  obtenerRetardoDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarRetardosDia(latest_date).subscribe(
      (data: any) => {
        this.listaRetardos = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  abrirModalEvento(crearEvento) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearEvento);
  }

  crearEventoClick() {
    let latest_date = this.datepipe.transform(this.retardo.fechaRetardo, 'yyyy-MM-dd');
    this.retardo.fechaRetardo = latest_date;
    this.apiService.crearRetardo(this.idTrabajador,this.retardo).subscribe(
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
