import { EmpresasCadastroComponent } from '../empresas/empresas-cadastro/empresas-cadastro.component';

export class Departamento{
  id: number;
  nomedep: string;
  nomeger: string;
  empresa= new Empresa();
}

export class Empresa {
  id: number;
	nome: string;
}
