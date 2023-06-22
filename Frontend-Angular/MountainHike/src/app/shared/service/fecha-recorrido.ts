import { Guias } from "src/app/pages/admin-panel/InterfaceGuias";
import { Recorridos } from "src/app/pages/admin-panel/InterfaceRecorridos";

export interface FechaRecorrido {
    id: number,
    fecha: Date,
    recorrido: Recorridos,
    guia: Guias 
  }