import { Component, OnInit } from '@angular/core';
import { Vgtrabalho } from './../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VgtrabalhoService } from './../vgtrabalho.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-vgtrabalho-cadastro',
  templateUrl: './vgtrabalho-cadastro.component.html',
  styleUrls: ['./vgtrabalho-cadastro.component.css']
})
export class VgtrabalhoCadastroComponent implements OnInit {

  vgtrabalho = new Vgtrabalho();
  empresas = [];
  departamentos = [];
  nivelesc = [];

  constructor(
    private service: VgtrabalhoService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {
    this.nivelesc = [
      {label: 'Nenhum', value: 'Nenhum'},
      {label: 'Fundamental', value: 'Fundamental'},
      {label: 'Médio', value: 'Médio'},
      {label: 'Superior', value: 'Superior'},
    ];
  }

  ngOnInit() {
    this.pesquisarEmpresas();
    this.pesquisarDepartamentos();
    const codigoVgtrabalho = this.rota.snapshot.params['id'];
    if(codigoVgtrabalho){
      this.carregarVgtrabalho(codigoVgtrabalho);
    }
  }

  carregarVgtrabalho(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.vgtrabalho = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.vgtrabalho)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Vaga de trabalho '+this.vgtrabalho.nomedcargo+' cadastrada'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.vgtrabalho)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Vaga de trabalho '+this.vgtrabalho.nomedcargo+' alterada'});
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
    return Boolean(this.vgtrabalho.id);
  }

  pesquisarEmpresas(){
    this.service.listarEmpresas()
    .then((dados)=>{
      this.empresas=dados
      .map(e => ({ label: e.nome, value: e.id }));
    });
  }

  pesquisarDepartamentos(){
    this.service.listarDepartamentos()
    .then((dados)=>{
      this.departamentos=dados
      .map(e => ({ label: e.nomedep, value: e.id }));
    });
  }


}
