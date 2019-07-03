import { VgtrabalhoCadastroComponent } from './vgtrabalho/vgtrabalho-cadastro/vgtrabalho-cadastro.component';
import { EmpresasModule } from './empresas/empresas.module';
import { VgtrabalhoModule } from './vgtrabalho/vgtrabalho.module';
import { DepartamentosPesquisaComponent } from './departamentos/departamentos-pesquisa/departamentos-pesquisa.component';
import { DepartamentosCadastroComponent } from './departamentos/departamentos-cadastro/departamentos-cadastro.component';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';

import{Routes, RouterModule} from '@angular/router';
import { EmpresasPesquisaComponent } from './empresas/empresas-pesquisa/empresas-pesquisa.component';
import { VgtrabalhoPesquisaComponent } from './vgtrabalho/vgtrabalho-pesquisa/vgtrabalho-pesquisa.component';
import { ButtonModule } from 'primeng/button';

const rotas: Routes = [
  {path: 'departamentos/table', component: DepartamentosPesquisaComponent},
  {path: 'departamentos', component: DepartamentosCadastroComponent},
  {path: 'departamentos/:id', component: DepartamentosCadastroComponent},
  {path: 'empresas/table', component: EmpresasPesquisaComponent},
  {path: 'empresas', component: EmpresasCadastroComponent},
  {path: 'empresas/:id', component: EmpresasCadastroComponent},
  {path: 'vgtrabalho/table', component: VgtrabalhoPesquisaComponent},
  {path: 'vgtrabalho', component: VgtrabalhoCadastroComponent},
  {path: 'vgtrabalho/:id', component: VgtrabalhoCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DepartamentosModule,
    VgtrabalhoModule,
    EmpresasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    ButtonModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
