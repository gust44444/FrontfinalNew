import { Component, OnInit } from '@angular/core';
import { Departamento } from './../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from './../departamentos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-departamentos-cadastro',
  templateUrl: './departamentos-cadastro.component.html',
  styleUrls: ['./departamentos-cadastro.component.css']
})
export class DepartamentosCadastroComponent implements OnInit {

  departamento = new Departamento();
  empresas = [];

  constructor(
    private service: DepartamentosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarEmpresas();
    const codigoDepartamento = this.rota.snapshot.params['id'];
    if(codigoDepartamento){
      this.carregarDepartamento(codigoDepartamento);
    }
  }

  carregarDepartamento(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.departamento = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.departamento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Departamento '+this.departamento.nomedep+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.departamento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Departamento '+this.departamento.nomedep+' alterada'});
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
    return Boolean(this.departamento.id);
  }

  pesquisarEmpresas(){
    this.service.listarEmpresas()
    .then((dados)=>{
      this.empresas=dados
      .map(e => ({ label: e.nome, value: e.id }));
    });
  }



}
