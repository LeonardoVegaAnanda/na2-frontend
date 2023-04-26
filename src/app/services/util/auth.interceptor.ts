import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginNa2Service  } from '../login/login-na2.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    //Constructor
    constructor(private login:LoginNa2Service){}

    //Intercepetor para obtener el bearer token
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = this.login.getToken();

        if(token != null){
            authRequest = authRequest.clone({
                setHeaders:{Authorization:`Bearer ${token}`}
            });
        }
        return next.handle(authRequest);
    }

}

//Exportamos el bearer de cada persona
export const authInterceptorProviders = [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]