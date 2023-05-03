export interface Recorrido {
  id_recorrido: number;
  nombre_recorrido: string;
  texto: string;
  dificultad: string;
  precio: number;
}

export interface Recorridos {
  id: number;
  titulo: string;
  texto: string;
  imagen: string;
  recorridos: Recorrido[];
}

