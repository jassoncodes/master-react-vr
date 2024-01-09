import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  //1. creamos el estado (almacen)
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  //2. funcion generica para llenar el array de usuarios con datos quemados
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Townley",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Trevor",
        last_name: "Philips",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Franklin",
        last_name: "Clinton",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  //1era forma: llamada de datos mediante promesas
  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then(
        (resFinal) => {
          setUsuarios(resFinal.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //2da forma mediante async y await
  const getUsuariosAsync = async () => {
    setTimeout(async () => {
      try {
        // const peticion = await fetch("https://reqres.in/api/users/23");
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();

        if (peticion.status === 404) {
          setErrores("No existen usuarios para listar");
        }
        console.log(peticion);
        setUsuarios(data);
        setCargando(false);
      } catch (err) {
        console.log(err);
        setErrores(err.message);
      }
    }, 1000);
  };

  useEffect(() => {
    // getUsuariosEstaticos();
    // getUsuariosAjaxPms();
    getUsuariosAsync();
  }, []);

  if (errores !== "") {
    return <div className="errores">{errores}</div>;
  } else if (cargando === true) {
    return <div className="cargando">Cargando datos...</div>;
  } else if (!cargando && errores === "") {
    return (
      <div>
        <h2>AjaxComponent</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img
                  src={usuario.avatar}
                  alt="avatar"
                  width="80"
                  className="avatar"
                />
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
