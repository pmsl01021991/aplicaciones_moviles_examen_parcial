import { useState } from "react";

export default function useLoginForm() {

  const [correo, setCorreo] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({

    correo: "",

    password: "",

    confirmPassword: ""

  });

  const validarLogin = () => {

    const nuevosErrores = {

      correo: "",

      password: "",

      confirmPassword: ""

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

  const validarRegistro = () => {

    if (!validarLogin()) return false;

    const nuevosErrores = {

      correo: "",

      password: "",

      confirmPassword: ""

    };

    let valido = true;

    if (password.length < 6) {

      nuevosErrores.password =

        "Mínimo 6 caracteres";

      valido = false;

    }

    if (password !== confirmPassword) {

      nuevosErrores.confirmPassword =

        "Las contraseñas no coinciden";

      valido = false;

    }

    setErrors(nuevosErrores);

    return valido;

  };

  return {

    correo,

    password,

    confirmPassword,

    setCorreo,

    setPassword,

    setConfirmPassword,

    errors,

    validarLogin,

    validarRegistro

  };

}