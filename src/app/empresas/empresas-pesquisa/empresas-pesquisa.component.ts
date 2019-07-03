import { Component, OnInit } from '@angular/core';
import { EmpresasService } from './../empresas.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-empresas-pesquisa',
  templateUrl: './empresas-pesquisa.component.html',
  styleUrls: ['./empresas-pesquisa.component.css']
})
export class EmpresasPesquisaComponent implements OnInit {

  empresas = [];

  busca:string;

  constructor(
        private service:EmpresasService,
        private msg: MessageService,
        private conf: ConfirmationService

  ) {
  }

  pesquisar(){
    this.service.pesquisar({nome:this.busca})
    .then((dados)=>{
      this.empresas=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(empresa:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+empresa.nome+'?',
      accept: () => {
        this.excluir(empresa);
      }
    });
  }

  excluir(empresa: any){
    this.service.excluir(empresa.id).then(() =>{
      this.pesquisar();
      this.msg.add({severity:'Exclusão'+empresa.nome, summary:'Service Message',detail:'Empresa'});
    });
  }

}
