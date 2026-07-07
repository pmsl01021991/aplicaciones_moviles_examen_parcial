import { Reserva } from "../models/Reserva";

export type ReservaAction =

  | {
      type: "ADD";
      payload: Reserva;
    }

  | {
      type: "UPDATE";
      payload: Reserva;
    }

  | {
      type: "DELETE";
      payload: string;
    };

export const reservaReducer = (
  state: Reserva[],
  action: ReservaAction
): Reserva[] => {

  switch (action.type) {

    case "ADD":
      return [
        ...state,
        action.payload
      ];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      );

    case "DELETE":
      return state.filter(
        (item) => item.id !== action.payload
      );

    default:
      return state;
  }

};