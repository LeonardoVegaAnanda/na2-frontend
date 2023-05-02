import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-quejas-admin',
  templateUrl: './listar-quejas-admin.component.html',
  styleUrls: ['./listar-quejas-admin.component.css']
})
export class ListarQuejasAdminComponent {
  fecha = new Date();
  quejaNueva = {
    fechaQueja: Date(),
    tipo_Queja: '',
    cuerpo_queja: '',
    estatus_queja: 'Abierta'
  }
  trabajadores = [];
  idTrabajador: any;
  listaQuejas: any = [];

  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.apiService.listarQuejas().subscribe(
      (data) => {
        this.listaQuejas = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  obtenerQuejasDate() {
    Swal.fire({
      icon: 'question',
      title: "Obtener Quejas",
      text: "¿Desea obtener las quejas?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
          this.apiService.listarQuejasFecha(latest_date).subscribe(
            (data: any) => {
              this.listaQuejas = data;
              Swal.fire("Exito","Exito al buscar la lista de quejas","success");
            },
            (error) => {
              console.log(error)
            }
          );
        }
      });
  }
  abrirModalQueja(crearQueja) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearQueja);
  }

  crearQuejaClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Queja",
      text: "¿Desea crear una queja?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.quejaNueva.fechaQueja, 'yyyy-MM-dd');
          this.quejaNueva.fechaQueja = latest_date;
          this.apiService.crearQueja(this.quejaNueva, this.idTrabajador).subscribe(
            (data) => {
              this.modal.dismissAll();
              Swal.fire("Exito","Exito al crear la queja","success");
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
