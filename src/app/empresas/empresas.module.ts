import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';

@NgModule({
  declarations: [EmpresasComponent, EmpresasCadastroComponent],
  imports: [
    CommonModule
  ]
})
export class EmpresasModule { }
