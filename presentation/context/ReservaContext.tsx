import {
  createContext,
  useReducer,
  useContext,
  ReactNode
} from "react";

import { Reserva } from "../models/Reserva";
import { reservasMock } from "../data/reservasMock";
import {
  reservaReducer,
  ReservaAction
} from "../reducer/reservaReducer";

interface ReservaContextProps {

  reservas: Reserva[];

  dispatch: React.Dispatch<ReservaAction>;

}

const ReservaContext = createContext<
  ReservaContextProps | undefined
>(undefined);

interface ProviderProps {

  children: ReactNode;

}

export const ReservaProvider = ({
  children
}: ProviderProps) => {

  const [reservas, dispatch] = useReducer(

    reservaReducer,

    reservasMock

  );

  return (

    <ReservaContext.Provider

      value={{

        reservas,

        dispatch

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