import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-evento-worker',
  templateUrl: './listar-evento-worker.component.html',
  styleUrls: ['./listar-evento-worker.component.css']
})
export class ListarEventoWorkerComponent {
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
    Swal.fire({
      icon: 'question',
      title: "Buscar Eventosr",
      text: "¿Desea buscar la lista de eventos?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
          this.apiService.listarEventosDia(latest_date).subscribe(
            (data: any) => {
              Swal.fire("Exito", "Exito al traer la fecha", "success")
              this.listaEventos = data;
            },
            (error) => {
              console.log(error)
            }
          );
        }
      });
  }

  abrirModalEvento(crearEvento) {
    this.apiService.listarGerentes().subscribe(
      (data: any) => {
        this.gerentes = data.contenido;
        console.log(this.gerentes);
      }
    );
    this.modal.open(crearEvento);
  }

  crearEventoClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Evento",
      text: "¿Desea crear el evento?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.eventoNuevo.fechEvento, 'yyyy-MM-dd');
          this.eventoNuevo.fechEvento = latest_date;
          console.log(this.idGerente, this.eventoNuevo.fechEvento);
          this.apiService.crearEvento(this.eventoNuevo, this.idGerente).subscribe(
            (data) => {
              Swal.fire("Exito","Exito al crear el evento")
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
