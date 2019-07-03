import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { EmpresasService } from './../empresas.service';
import { MessageService } from 'primeng/api';
import { Empresa } from './../model';

@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css']
})
export class EmpresasCadastroComponent implements OnInit {

  empresa = new Empresa();
  estados = [];

  constructor(
    private service: EmpresasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {
    this.estados = [
      {label: 'AC', value: 'AC'},
      {label: 'AL', value: 'AL'},
      {label: 'AP', value: 'AP'},
      {label: 'AM', value: 'AM'},
      {label: 'BA', value: 'BA'},
      {label: 'CE', value: 'CE'},
      {label: 'DF', value: 'DF'},
      {label: 'ES', value: 'ES'},
      {label: 'GO', value: 'GO'},
      {label: 'MA', value: 'MA'},
      {label: 'MT', value: 'MT'},
      {label: 'MS', value: 'MS'},
      {label: 'MG', value: 'MG'},
      {label: 'PA', value: 'PA'},
      {label: 'PB', value: 'PB'},
      {label: 'PR', value: 'PR'},
      {label: 'PE', value: 'PE'},
      {label: 'PI', value: 'PI'},
      {label: 'RJ', value: 'RJ'},
      {label: 'RN', value: 'RN'},
      {label: 'RS', value: 'RS'},
      {label: 'RO', value: 'RO'},
      {label: 'RR', value: 'RR'},
      {label: 'SC', value: 'SC'},
      {label: 'SP', value: 'SP'},
      {label: 'SE', value: 'SE'},
      {label: 'TO', value: 'TO'},
    ];
   }

  ngOnInit() {
    const codigoEmpresa = this.rota.snapshot.params['id'];
    if(codigoEmpresa){
      this.carregarEmpresa(codigoEmpresa);
    }
  }


  carregarEmpresa(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.empresa = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.empresa)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Empresa '+this.empresa.nome+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.empresa)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Empresa '+this.empresa.nome+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }

  }

  get editando(){
    return Boolean(this.empresa.id);
  }

}
