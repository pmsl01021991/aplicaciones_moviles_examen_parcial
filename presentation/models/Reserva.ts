export type EstadoReserva =
  | "PENDIENTE"
  | "EN_PROCESO"
  | "FINALIZADO";

export type PrioridadReserva =
  | "ALTA"
  | "MEDIA"
  | "BAJA";

export interface Reserva {
  id: string;
  cliente: string;
  telefono: string;
  mesa: string;
  plato: string;
  comensales: number;
  prioridad: PrioridadReserva;
  estado: EstadoReserva;
  fechaRegistro: string;
}