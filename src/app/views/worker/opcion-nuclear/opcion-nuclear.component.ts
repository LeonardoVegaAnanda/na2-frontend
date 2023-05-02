import { Component, OnInit } from '@angular/core';
import { ApiNa2Service } from 'src/app/services/api/api-na2.service';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';

@Component({
  selector: 'app-opcion-nuclear',
  templateUrl: './opcion-nuclear.component.html',
  styleUrls: ['./opcion-nuclear.component.css']
})
export class OpcionNuclearComponent implements OnInit{
  UsuarioObtenido:any;
  constructor(private apiLogin:LoginNa2Service,private apiService:ApiNa2Service){}
  trabajadorObtenido

  ngOnInit(): void {
        this.UsuarioObtenido = this.apiLogin.getUser();
    console.log(this.UsuarioObtenido.idUsuario);
    this.apiService.obtenerTrabajadorByIdUsuario(this.UsuarioObtenido.idUsuario).subscribe(
      (data) => {
        this.trabajadorObtenido = data
    },
    (error)=>{
      console.log(error);
    }
    )}
  
  registrar_renuncia(){

  }
}
