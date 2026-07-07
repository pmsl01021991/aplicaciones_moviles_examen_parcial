import { useState } from "react";

export default function useLoginForm() {

  const [correo, setCorreo] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    correo: "",
    password: ""
  });

  const validar = () => {

    const nuevosErrores = {

      correo: "",

      password: ""

    };

    let valido = true;

    if (!correo.trim()) {

      nuevosErrores.correo = "Ingrese su correo";

      valido = false;

    }

    else if (

      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)

    ) {

      nuevosErrores.correo = "Correo inválido";

      valido = false;

    }

    if (!password.trim()) {

      nuevosErrores.password =

        "Ingrese la contraseña";

      valido = false;

    }

    setErrors(nuevosErrores);

    return valido;

  };

  return {

    correo,

    password,

    setCorreo,

    setPassword,

    errors,

    validar

  };

}