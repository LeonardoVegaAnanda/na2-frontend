import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-quejas-worker',
  templateUrl: './listar-quejas-worker.component.html',
  styleUrls: ['./listar-quejas-worker.component.css']
})
export class ListarQuejasWorkerComponent {
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
  trabajadorObtenido: any;
  UsuarioObtenido: any;
  validado: boolean = false;

  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal, private apiLogin: LoginNa2Service) { }

  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data;
        this.apiService.listarQuejasTrabajadores(this.trabajadorObtenido.id).subscribe(
          (data) => {
            this.listaQuejas = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      },
    )
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
              Swal.fire("Exito", "Exito al buscar la lista de quejas", "success");
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
              Swal.fire("Exito", "Exito al crear la queja", "success");
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
