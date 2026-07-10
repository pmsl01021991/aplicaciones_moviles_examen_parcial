import {createContext,useReducer,useContext,ReactNode,useState,} from "react";
import { mesasMock } from "../data/mesasMock";
import { Mesa } from "../models/Mesa";
import { Reserva } from "../models/Reserva";
import { ReservaTemporal } from "../models/ReservaTemporal";
import { reservasMock } from "../data/reservasMock";
import {reservaReducer,ReservaAction,} from "../reducer/reservaReducer";

interface ReservaContextProps {

  reservas: Reserva[];

  platosSeleccionados: string[];

  setPlatosSeleccionados: React.Dispatch<
  React.SetStateAction<string[]>
  >;

  reservaTemporal: ReservaTemporal;

  setReservaTemporal: React.Dispatch<
    React.SetStateAction<ReservaTemporal>
  >;

  dispatch: React.Dispatch<ReservaAction>;

  mesas: Mesa[];

  setMesas: React.Dispatch<
  React.SetStateAction<Mesa[]>
>;

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

  const [mesas, setMesas] = useState(mesasMock);

  const [platosSeleccionados, setPlatosSeleccionados] =
    useState<string[]>([]);

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

        platosSeleccionados,
        setPlatosSeleccionados,

        reservaTemporal,
        setReservaTemporal,

        mesas,
        setMesas,

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