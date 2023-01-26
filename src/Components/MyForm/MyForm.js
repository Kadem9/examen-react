import React, { useState, useEffect } from "react";
import MyList from "../MyList/MyList";
import "./MyForm.css";

export default function MyForm() {
  const [idendity, setIdendity] = useState([]);
  const [validation, setValidation] = useState("");
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const inputNameChange = (e) => {
    setInputName(e);
  };
  const inputAgeChange = (e) => {
    setInputAge(e);
  };

  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     if (inputAge === "" || inputName === "") {
  //       setError(true);
  //       setValidation("Attention, il faut remplir tous les champs");
  //     } else {
  //       setIdendity([...idendity, { name: inputName, age: inputAge }]);
  //       setInputName("");
  //       setInputAge("");
  //       setError(false);
  //       setValidation("Ajout du nom avec succès");
  //     }
  //   };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmited(true);
  };

  // UseEffect sert à faire une action à chaque fois que l'état d'une variable change (ici inputAge et inputName)
  // Il peut également être utilisé pour faire une action au chargement de la page en mettant un tableau vide en deuxième paramètre

  useEffect(() => {
    if (submited) {
      if (inputAge === "" || inputName === "") {
        setError(true);
        setValidation("Attention, il faut remplir tous les champs");
        setSubmited(false);
      } else {
        setIdendity([...idendity, { name: inputName, age: inputAge }]);
        setInputName("");
        setInputAge("");
        setError(false);
        setValidation("Ajout du nom avec succès");
        setSubmited(false);
      }
    }
  }, [submited]);

  return (
    <div className="form-modal">
      <h1 className="info-title">Vos informations</h1>
      {error && (
        <h4 className="validation-msg error">
          Attention, il faut remplir tous les champs
        </h4>
      )}

      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="lastname">Votre nom</label>
          <input
            value={inputName}
            onChange={(e) => inputNameChange(e.target.value)}
            type="text"
            name="lastname"
            id="lastname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Votre âge</label>
          <input
            value={inputAge}
            onChange={(e) => inputAgeChange(e.target.value)}
            type="number"
            name="age"
            id="age"
          />
        </div>

        <button className="submit-form">Soumettre</button>
      </form>

      {/* Ma liste */}
      <MyList data={idendity} />
    </div>
  );
}
