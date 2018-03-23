export class Compromisso {
  id: number;
  inicio: Date;
  termino: Date;
  descricao: string;
  local: string;
}

export class Equipe {
  id: number;
  idUsuarioLider: number;
  descricao: string;
}

export class Usuario {
  id: number;
  nome: string;
  perfil: 'LIDER';
  idEquipe: number;
}
