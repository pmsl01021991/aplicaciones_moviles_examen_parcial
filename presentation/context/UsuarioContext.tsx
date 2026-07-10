import {createContext,useReducer,useContext,ReactNode,useState,} from "react";
import { Usuario } from "../models/Usuario";
import { usuariosMock } from "../data/usuariosMock";
import {usuarioReducer,UsuarioAction,} from "../reducer/usuarioReducer";

interface UsuarioContextProps {
  usuarios: Usuario[];

  usuarioActual: Usuario | null;

  setUsuarioActual: (usuario: Usuario | null) => void;

  dispatch: React.Dispatch<UsuarioAction>;
}

const UsuarioContext = createContext<UsuarioContextProps | undefined>(
  undefined
);

export function UsuarioProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [usuarios, dispatch] = useReducer(
    usuarioReducer,
    usuariosMock
  );

  const [usuarioActual, setUsuarioActual] =
    useState<Usuario | null>(null);

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        usuarioActual,
        setUsuarioActual,
        dispatch,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {

  const context = useContext(UsuarioContext);

  if (!context) {

    throw new Error(
      "useUsuario debe usarse dentro de UsuarioProvider"
    );

  }

  return context;

}