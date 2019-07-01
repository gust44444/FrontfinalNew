export class Vgtrabalho {
  id: number;
  empresa= new Empresa();
  departamento= new Departamento();
	nomedcargo: string ;
  salario: number;
  nivelesc: String;
}

export class Departamento{
  id: number;
  nomedep: string;
}

export class Empresa {
  id: number;
	nome: string;
}
