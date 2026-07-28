import { Reserva } from "../models/Reserva";

export const reservasMock: Reserva[] = [

  {
    id: "1",
    cliente: "Juan Pérez",
    numero: "987654321",
    mesa: "Mesa 1",
    plato: "Lomo Saltado",
    comensales: 2,
    prioridad: "ALTA",
    estado: "PENDIENTE",
    fecha: "2026-07-05",
    hora: "12:00"
  },

  {
    id: "2",
    cliente: "María López",
    numero: "912345678",
    mesa: "Mesa 5",
    plato: "Ají de Gallina",
    comensales: 4,
    prioridad: "MEDIA",
    estado: "EN_PROCESO",
    fecha: "2026-07-06",
    hora: "12:00"
  },

  {
    id: "3",
    cliente: "Carlos Ramos",
    numero: "998877665",
    mesa: "Mesa 8",
    plato: "Arroz Chaufa",
    comensales: 3,
    prioridad: "BAJA",
    estado: "FINALIZADO",
    fecha: "2026-07-07",
    hora: "12:00"
  }

];