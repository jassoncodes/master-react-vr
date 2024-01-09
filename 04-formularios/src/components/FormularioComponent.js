import React, { useState } from "react";

export const FormularioComponent = () => {
  // const [usuario, setUsuario] = useState({});

  const [userList, setUserList] = useState([]);

  const appendUser = (user) => {
    const userListUpdated = [...userList, user];
    setUserList(userListUpdated);
  };

  const conseguirFormulario = (e) => {
    e.preventDefault();
    let data = e.target;

    let user = {
      name: data.name.value,
      lastName: data.lastName.value,
      gender: data.gender.value,
      about: data.about.value,
    };
    // setUsuario(user);
    appendUser(user);
  };

  return (
    <div>
      <h3>Formularios con React</h3>
      <div className="usersContainer">
        <div className="usersForm">
          <form onSubmit={conseguirFormulario}>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              placeholder="About"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        {userList.length >= 1 && (
          <div className="usersInfo">
            <div className="user">
              {/* {Object.entries(usuario).map(([key, value]) => {
                return (
                  <li key={key} className="userData">
                    {key}: {usuario[key]}
                  </li>
                );
              })} */}
              {userList.map((user, index) => (
                <ul className="userData" key={index}>
                  {Object.entries(user).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
