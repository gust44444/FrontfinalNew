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

  constructor(
    private service: EmpresasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

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
