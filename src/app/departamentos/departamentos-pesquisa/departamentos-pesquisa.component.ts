import { DepartamentosService } from './../departamentos.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent implements OnInit {

  departamentos = [];

  busca:string;

  constructor(
        private service:DepartamentosService,
        private msg: MessageService,
        private conf: ConfirmationService

  ) { }

  pesquisar(){
    this.service.pesquisar({nomedep:this.busca})
    .then((dados)=>{
      this.departamentos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(departamento:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+departamento.nomedep+'?',
      accept: () => {
        this.excluir(departamento);
      }
    });
  }

  excluir(departamento: any){
    this.service.excluir(departamento.id).then(() =>{
      this.pesquisar();
      this.msg.add({severity:'Exclusão'+departamento.nomedep, summary:'Service Message',detail:'Departamento'});
    });
  }

}
