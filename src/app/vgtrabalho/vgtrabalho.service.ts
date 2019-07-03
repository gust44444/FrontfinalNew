import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vgtrabalho } from './model';

@Injectable({
  providedIn: 'root'
})
export class VgtrabalhoService {

  vgtrabalhoURL = 'http://localhost:8080/vgtrabalho';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nomedcargo){
      this.urlFiltro = 'http://localhost:8080/vgtrabalho/filtro?nome='+filtro.nomedcargo;
    }else{
      this.urlFiltro = 'http://localhost:8080/vgtrabalho';
    }
    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Vgtrabalho> {
    return this.http.get<Vgtrabalho>(this.vgtrabalhoURL+'/'+codigo).toPromise();
  }

  adicionar(vgtrabalho: Vgtrabalho): Promise<any>{
    return this.http.post(this.vgtrabalhoURL, vgtrabalho)
    .toPromise();
  }

  alterar(vgtrabalho: Vgtrabalho): Promise<any>{
    return this.http.put(this.vgtrabalhoURL+'/'+vgtrabalho.id, vgtrabalho)
    .toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.vgtrabalhoURL+"/"+id).toPromise().then(() => null);
  }

  retornaEmpresas():Promise<void> {
    return this.http.get<any>(this.vgtrabalhoURL+"/vgemp").toPromise();
  }

  listarPorNome(nome: string): Promise<any> {
    return this.http.get<any>(this.vgtrabalhoURL + '?nomedcargo=' + nome).toPromise();
  }

  listarEmpresas(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/empresas').toPromise();
  }

  listarDepartamentos(): Promise<any> {
    return this.http.get<any>('http://localhost:8080/departamentos').toPromise();
  }
}
