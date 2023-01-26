import React from "react";
import "./MyList.css";

export default function MyList(props) {
  return (
    <div>
      <h1 className="info-title">Nos utilisateurs</h1>
      {props.data.map((data, index) => {
        return (
          <div key={index}>
            <p className="list-users">
              {data.name}
              <span className="age-user">{data.age} ans</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
