import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from './model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  departamentosURL = 'http://localhost:8080/departamentos';
  urlFiltro;

  constructor(private http: HttpClient) { }


  pesquisar(filtro: any): Promise<any> {
    if(filtro.nomedep){
      this.urlFiltro = 'http://localhost:8080/departamentos/filtro?nomedep='+filtro.nomedep;
    }else{
      this.urlFiltro = 'http://localhost:8080/departamentos';
    }
    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Departamento> {
    return this.http.get<Departamento>(this.departamentosURL+'/'+codigo).toPromise();
  }

  adicionar(departamento: Departamento): Promise<any>{
    return this.http.post(this.departamentosURL, departamento)
    .toPromise();
  }

  alterar(departamento: Departamento): Promise<any>{
    return this.http.put(this.departamentosURL+'/'+departamento.id, departamento)
    .toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.departamentosURL+"/"+id).toPromise().then(() => null);
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.departamentosURL + '?nome=' + nome).toPromise();
  }

  listarEmpresas(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/empresas').toPromise();
  }

}
