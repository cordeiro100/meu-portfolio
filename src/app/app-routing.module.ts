import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastradoComponent } from './views/cadastrado/cadastrado.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'cadastrado', component: CadastradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
