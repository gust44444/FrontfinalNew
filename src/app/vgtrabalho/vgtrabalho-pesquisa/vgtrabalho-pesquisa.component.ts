import { Component, OnInit } from '@angular/core';
import { VgtrabalhoService } from '../vgtrabalho.service';
import { MessageService, ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-vgtrabalho-pesquisa',
  templateUrl: './vgtrabalho-pesquisa.component.html',
  styleUrls: ['./vgtrabalho-pesquisa.component.css']
})
export class VgtrabalhoPesquisaComponent implements OnInit {

  vgtrabalho = [];

  busca: string;

  constructor(
    private service:VgtrabalhoService,
    private msg: MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nomedcargo:this.busca})
    .then((dados)=>{
      this.vgtrabalho=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }


  confirmarExclusao(vgtrabalho:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir a vaga '+vgtrabalho.nomedcargo+'?',
      accept: () => {
        this.excluir(vgtrabalho);
      }
    });
  }


  excluir(vgtrabalho: any){
    this.service.excluir(vgtrabalho.id).then(() =>{
      this.pesquisar();
      this.msg.add({severity:'Exclusão'+vgtrabalho.nomedcargo, summary:'Service Message',detail:'Vaga de Trabalho'});
    });
  }

}
