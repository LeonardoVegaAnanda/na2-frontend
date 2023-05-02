import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginNa2Service } from 'src/app/services/login/login-na2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit{

  ngOnInit(): void {
    
  }
  //Variables para el form del Login
  loginForm = {
    "username": '',
    "password": ''
  }

  constructor(private login:LoginNa2Service, private router:Router){}

  loginSubmit(){
    if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
      return;
    }
    if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
      return;
    }
        //Conexion al service login
        this.login.loginToken(this.loginForm).subscribe(
          (data: any) => {
            this.login.loginUser(data.token);
            this.login.getCurrentUser().subscribe(
              (user: any) => {
                this.login.setUser(user);
                //Verificacion de Roles
                if (this.login.getUserRoles() == "ROLE_ADMIN") {
                  Swal.fire("Exito","Usuario Correcto","success");
                  this.router.navigate(['admin']);
                }
                else if(this.login.getUserRoles() == "ROLE_GERENTE"){
                  Swal.fire("Exito","Usuario Correcto","success");
                  this.router.navigate(['manager']);
                }
                else if(this.login.getUserRoles() == "ROLE_TRABAJADOR"){
                  Swal.fire("Exito","Usuario Correcto","success");
                  this.router.navigate(['worker']);
                }
                else{
                  this.login.logout();
                }
              }
            )
          },
          (error) => {
            console.log(error);
          }
        );
  }

}
