import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';

@Component({
  selector: 'app-detalle-evento-worker',
  templateUrl: './detalle-evento-worker.component.html',
  styleUrls: ['./detalle-evento-worker.component.css']
})
export class DetalleEventoWorkerComponent {
  id = 0;
  itemCode: any;
  itemTraido?: any;
  evento: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiNa2Service, private modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.obtenerEventoById(this.id).subscribe(
      (data) => {
        this.evento = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }




}
