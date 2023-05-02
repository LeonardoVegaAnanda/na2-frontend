import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-vacaciones-admin',
  templateUrl: './listar-vacaciones-admin.component.html',
  styleUrls: ['./listar-vacaciones-admin.component.css']
})
export class ListarVacacionesAdminComponent {
  fecha = new Date();

  listaVacaciones: any = [];
  constructor(private datepipe: DatePipe, private apiService: ApiNa2Service, private router: Router) { }
  ngOnInit(): void {
    this.apiService.listarVacaciones().subscribe(
      (data) => {
        this.listaVacaciones = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  obtenerVacacionesDate() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Vacaciones",
      text: "¿Desea buscar la listas de vacaciones?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          let latest_date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
          this.apiService.listarVacacionesFecha(latest_date).subscribe(
            (data: any) => {
              this.listaVacaciones = data;
            },
            (error) => {
              console.log(error)
            }
          );
        }
      });
  }
  detalleNomina(idTrabajador, id_Vacacion) {
    this.router.navigate(['/admin/vacaciones/' + id_Vacacion], {
      queryParams: {
        id_Vacacion: id_Vacacion,
        idTrabajador: idTrabajador
      }
    });
  }
}
