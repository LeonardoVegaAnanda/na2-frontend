import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-retardos-worker',
  templateUrl: './listar-retardos-worker.component.html',
  styleUrls: ['./listar-retardos-worker.component.css']
})
export class ListarRetardosWorkerComponent {
  UsuarioObtenido:any;
  trabajadorObtenido:any;
  fecha = new Date();
  trabajadores = [];
  listaRetardos: any = [];
  retardo = {
    tiempo_Retardo: 0,
    descuento_retardo: 0,
    fechaRetardo: Date()
  }
  idTrabajador: any;
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private modal: NgbModal,private apiLogin:LoginNa2Service) { }
  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data
        this.apiService.listarRetardosTrabajador(this.trabajadorObtenido.id).subscribe(
          (data) => {
            this.listaRetardos = data;
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
  };
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
  abrirModalRetardo(crearEvento) {
    this.apiService.listarTrabajadores().subscribe(
      (data: any) => {
        this.trabajadores = data.contenido;
        console.log(this.trabajadores);
      }
    );
    this.modal.open(crearEvento);
  }

  crearRetardoClick() {
    Swal.fire({
      icon: 'question',
      title: "Crear Retardo",
      text: "¿Desea crear un retardo?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.retardo.fechaRetardo, 'yyyy-MM-dd');
          this.retardo.fechaRetardo = latest_date;
          this.apiService.crearRetardo(this.idTrabajador, this.retardo).subscribe(
            (data) => {
              this.modal.dismissAll();
              console.log(data);
              Swal.fire("Exito", "Exito al crear un retardo", "success");
              this.ngOnInit();
            },
            (error) => {
              console.log(error);
              Swal.fire("Erro", "Error al crear un retardo", "success");
            }
          );
        }
      });
  }
}
