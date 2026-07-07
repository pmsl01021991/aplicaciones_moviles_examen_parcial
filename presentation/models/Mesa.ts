export interface ReservaMesa {

  nombre: string;

  fecha: string;

  hora: string;

}

export interface Mesa {

  id: number;

  nombre: string;

  disponible: boolean;

  reservas: ReservaMesa[];

}