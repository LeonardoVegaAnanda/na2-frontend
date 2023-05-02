import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soliciutd-vacaciones-worker',
  templateUrl: './soliciutd-vacaciones-worker.component.html',
  styleUrls: ['./soliciutd-vacaciones-worker.component.css']
})
export class SoliciutdVacacionesWorkerComponent {
  fecha = new Date();
  UsuarioObtenido:any;
  trabajadorObtenido:any;
  vacacion={
    fechaCreacion:Date(),
    fecha_inicio:Date(),
    fecha_fin:Date()
  }
  trabajadores=[];
  idTrabajador:any;

  listaVacaciones: any = [];
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private router: Router,private apiLogin:LoginNa2Service,private modal:NgbModal) { }
  ngOnInit(): void {
    this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data
    this.apiService.listarVacacionesTrabajadores(this.trabajadorObtenido.id).subscribe(
      (data) => {
        this.listaVacaciones = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error)=>{
    console.log(error);
  }
    )
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

  detalleNomina(idTrabajador, id_Vacacion) {
    this.router.navigate(['/admin/vacaciones/' + id_Vacacion], {
      queryParams: {
        id_Vacacion: id_Vacacion,
        idTrabajador: idTrabajador
      }
    });
  }
  crearQuejaClick() {
    console.log(this.idTrabajador);
    Swal.fire({
      icon: 'question',
      title: "Crear Vacaciones",
      text: "¿Desea crear una fecha de vacaciones?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.vacacion.fechaCreacion, 'yyyy-MM-dd');
          this.vacacion.fechaCreacion = latest_date;
          this.apiService.crearVacacion(this.vacacion, this.idTrabajador).subscribe(
            (data) => {
              this.modal.dismissAll();
              Swal.fire("Exito", "Exito al crear la vacacion", "success");
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
