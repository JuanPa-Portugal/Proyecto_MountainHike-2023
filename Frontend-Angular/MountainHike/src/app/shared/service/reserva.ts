import { FechaRecorrido } from "./fecha-recorrido";

export interface Reserva {
    id: string,
    fecha: Date,
    valor: number,
    cantidadParticipantes: number,
    factura: number,
    vendedor: number,
    cliente: number,
    fechaRecorrido: FechaRecorrido
  }

