import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.email === 'usuario@email.com' && 
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      localStorage.setItem('usuarioAutenticado', String(true))

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/home']);

    } else {
      alert("Email ou senha incorretos.");
      this.usuarioAutenticado = false;
      localStorage.setItem('usuarioAutenticado', String(false))
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}	