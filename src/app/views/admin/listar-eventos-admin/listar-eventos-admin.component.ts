import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-listar-eventos-admin',
  templateUrl: './listar-eventos-admin.component.html',
  styleUrls: ['./listar-eventos-admin.component.css']
})
export class ListarEventosAdminComponent {
  fecha = new Date();

  eventoNuevo = {
    tipo_evento: '',
    titulo_evento: '',
    cuerpo_evento: '',
    fechEvento: Date()
  }
  idGerente: any;
  gerentes: any = [];

  listaEventos: any = [];
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal) { }
  ngOnInit(): void {
    this.apiService.listarEventos().subscribe(
      (data) => {
        this.listaEventos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerEventoDate() {
    let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.apiService.listarEventosDia(latest_date).subscribe(
      (data: any) => {
        this.listaEventos = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  abrirModalEvento(crearEvento) {
    this.apiService.listarGerentes().subscribe(
      (data:any) => {
        this.gerentes = data.contenido;
        console.log(this.gerentes);
      }
    );
    this.modal.open(crearEvento);
  }

  crearEventoClick() {
    let latest_date = this.datepipe.transform(this.eventoNuevo.fechEvento, 'yyyy-MM-dd');
    this.eventoNuevo.fechEvento = latest_date;
     console.log(this.idGerente, this.eventoNuevo.fechEvento);
    this.apiService.crearEvento(this.eventoNuevo, this.idGerente).subscribe(
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
