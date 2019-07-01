import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresasURL = 'http://localhost:8080/empresas';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/empresas/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/empresas';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.empresasURL+"/"+id).toPromise().then(() => null);
  }

  adicionar(empresa: Empresa): Promise<any>{
    return this.http.post(this.empresasURL, empresa)
    .toPromise();
  }

  alterar(empresa: Empresa): Promise<any>{
    return this.http.put(this.empresasURL+'/'+empresa.id, empresa)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Empresa> {
    return this.http.get<Empresa>(this.empresasURL+'/'+codigo).toPromise();
  }

}
