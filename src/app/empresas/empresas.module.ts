import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { EmpresasService } from './empresas.service';

@NgModule({
  declarations: [EmpresasCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    EmpresasCadastroComponent
],
providers: [
  EmpresasService,
  MessageService
]

})
export class EmpresasModule { }
