import { useState } from "react";
import { EstadoReserva, PrioridadReserva } from "../models/Reserva";
import { validarTelefono, validarTexto,} from "../utils/validation";

export default function useReservaForm() {

  const [cliente, setCliente] = useState("");

  const [numero, setNumero] = useState("");

  const [mesa, setMesa] = useState("");

  const [plato, setPlato] = useState("");

  const [comensales, setComensales] = useState("");

  const [prioridad, setPrioridad] =

   useState<PrioridadReserva>("MEDIA");

  const [estado, setEstado] =
  
  useState<EstadoReserva>("PENDIENTE");

  const [errors, setErrors] = useState({

    cliente: "",

    numero: "",

    mesa: "",

    plato: ""

  });

  const validar = () => {

    const nuevosErrores = {

      cliente: "",

      numero: "",

      mesa: "",

      plato: ""

    };

    let valido = true;

    if (!validarTexto(cliente)) {

      nuevosErrores.cliente =

        "Ingrese el nombre";

      valido = false;

    }

    if (!validarTelefono(numero)) {

      nuevosErrores.numero =

        "Número inválido";

      valido = false;

    }

    if (!validarTexto(mesa)) {

      nuevosErrores.mesa =

        "Seleccione una mesa";

      valido = false;

    }

    if (!validarTexto(plato)) {

      nuevosErrores.plato =

        "Ingrese un plato";

      valido = false;

    }

    setErrors(nuevosErrores);

    return valido;

  };

  return {

    cliente,

    numero,

    mesa,

    plato,

    comensales,

    prioridad,

    estado,

    errors,

    setCliente,

    setNumero,

    setMesa,

    setPlato,

    setComensales,

    setPrioridad,

    setEstado,

    validar

  };

}