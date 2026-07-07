import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useState,
} from "react";

import { Reserva } from "../models/Reserva";
import { ReservaTemporal } from "../models/ReservaTemporal";

import { reservasMock } from "../data/reservasMock";

import {
  reservaReducer,
  ReservaAction,
} from "../reducer/reservaReducer";

interface ReservaContextProps {

  reservas: Reserva[];

  platoSeleccionado: string;

  setPlatoSeleccionado: React.Dispatch<React.SetStateAction<string>>;

  reservaTemporal: ReservaTemporal;

  setReservaTemporal: React.Dispatch<
    React.SetStateAction<ReservaTemporal>
  >;

  dispatch: React.Dispatch<ReservaAction>;

}

const ReservaContext = createContext<
  ReservaContextProps | undefined
>(undefined);

interface ProviderProps {

  children: ReactNode;

}

export const ReservaProvider = ({
  children,
}: ProviderProps) => {

  const [reservas, dispatch] = useReducer(
    reservaReducer,
    reservasMock
  );

  const [platoSeleccionado, setPlatoSeleccionado] =
    useState("");

  const [reservaTemporal, setReservaTemporal] =
  useState<ReservaTemporal>({
    plato: "",
    mesa: "",
    fecha: "",
    hora: "",
    numero: "",
    comensales: 1,
  });

  return (

    <ReservaContext.Provider
      value={{
        reservas,

        platoSeleccionado,
        setPlatoSeleccionado,

        reservaTemporal,
        setReservaTemporal,

        dispatch,
      }}
    >

      {children}

    </ReservaContext.Provider>

  );

};

export const useReserva = () => {

  const context = useContext(ReservaContext);

  if (!context) {

    throw new Error(
      "useReserva debe usarse dentro de ReservaProvider"
    );

  }

  return context;

};