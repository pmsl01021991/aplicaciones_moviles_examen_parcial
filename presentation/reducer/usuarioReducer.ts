import { Usuario } from "../models/Usuario";

export type UsuarioAction =

  | {

      type: "REGISTER";

      payload: Usuario;

    };

export const usuarioReducer = (

  state: Usuario[],

  action: UsuarioAction

): Usuario[] => {

  switch (action.type) {

    case "REGISTER":

      return [

        ...state,

        action.payload

      ];

    default:

      return state;

  }

};