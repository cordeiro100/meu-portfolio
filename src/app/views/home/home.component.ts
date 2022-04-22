import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { RequestLogin } from 'src/app/models/request-login';
import { User } from 'src/app/models/user';
import { Usuarios } from 'src/app/models/usuarios';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  public requestLogin: RequestLogin;
  registros: any[];
  nome: string;
  sobrenome: string;
  email: string;
  password: string;

  logoMobile: boolean = true;
  imagemLogo: boolean = true;
  tituloAngular: boolean = true;
  boxLogin: boolean = false;
  boxRegister: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.authService.todosUsuarios().subscribe((registros: User[]) => {
      this.registros = registros;
    });

  }

loginModel = new Usuarios("","")
mensagem = ""

logar(){
  console.log(this.loginModel)

  this.loginService.login(this.loginModel).subscribe((response)=>{
    this.router.navigateByUrl('main')
},
  (respostaErro)=>{
    this.mensagem = respostaErro.error
    console.log(this.mensagem)
  }
  )
}
  

  registrar() {
    const usuarios: User = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      password: this.password,
    };
    this.authService.registrar(usuarios).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('cadastrado');
      },
      (error) => console.error(error)
    );
  }

  public login(): void {}
  showLoginBox() {
    this.boxLogin = !this.boxLogin;
    this.tituloAngular = !this.tituloAngular;
    this.imagemLogo = !this.imagemLogo
    this.logoMobile = !this.logoMobile
  }

  showRegister() {
    this.tituloAngular = !this.tituloAngular;
    this.boxRegister = !this.boxRegister;
    this.imagemLogo = !this.imagemLogo
    this.logoMobile = !this.logoMobile
  }


}
