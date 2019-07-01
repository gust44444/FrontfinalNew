import { DepartamentosService } from './departamentos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { DepartamentosCadastroComponent } from './departamentos-cadastro/departamentos-cadastro.component';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [DepartamentosCadastroComponent, DepartamentosPesquisaComponent],
  imports: [
    CommonModule,
    DropdownModule,
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
    DepartamentosPesquisaComponent,
    DepartamentosCadastroComponent
],
providers: [
  DepartamentosService,
  MessageService
]
})
export class DepartamentosModule { }
