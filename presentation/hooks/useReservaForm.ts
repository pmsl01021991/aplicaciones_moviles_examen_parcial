import { useState } from "react";
import { EstadoReserva, PrioridadReserva } from "../models/Reserva";

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

    if (!cliente.trim()) {

      nuevosErrores.cliente =

        "Ingrese el nombre";

      valido = false;

    }

    if (!numero.match(/^9\d{8}$/)) {

      nuevosErrores.numero =

        "Número inválido";

      valido = false;

    }

    if (!mesa.trim()) {

      nuevosErrores.mesa =

        "Seleccione una mesa";

      valido = false;

    }

    if (!plato.trim()) {

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