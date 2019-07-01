import { VgtrabalhoService } from './vgtrabalho.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgtrabalhoCadastroComponent } from './vgtrabalho-cadastro/vgtrabalho-cadastro.component';
import { VgtrabalhoPesquisaComponent } from './vgtrabalho-pesquisa/vgtrabalho-pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [VgtrabalhoCadastroComponent, VgtrabalhoPesquisaComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    InputMaskModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    VgtrabalhoPesquisaComponent,
    VgtrabalhoCadastroComponent
],
providers: [
  VgtrabalhoService,
  MessageService
]
})
export class VgtrabalhoModule { }
