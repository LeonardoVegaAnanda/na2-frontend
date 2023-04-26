import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-gerente-admin',
  templateUrl: './detalle-gerente-admin.component.html',
  styleUrls: ['./detalle-gerente-admin.component.css']
})
export class DetalleGerenteAdminComponent {
  gerente?: any;
  idGerente: any;

  constructor(private apiService: ApiNa2Service, private route: ActivatedRoute, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.idGerente = this.route.snapshot.params['id'];
    this.apiService.obtenerGerenteById(this.idGerente).subscribe(
      (data) => {
        this.gerente = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editarGerenteClick() {
    this.apiService.actualizarGerente(this.gerente).subscribe(
      (data) => {
        console.log(data);
        this.modal.dismissAll();
      },
      (error) => {
      }
    );
  }

  openEditarGerente(editarAdmin: any) {
    this.modal.open(editarAdmin);
  }

  eliminarGerente(idSurtidor: any) {
    this.apiService.eliminarGerente(idSurtidor).subscribe(
      (data) => {

        this.router.navigate(['/admin/gerente']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
