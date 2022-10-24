import React from "react";

function Field(props) {
  return (
    <div>
        <label for={props.id}>{props.name}</label>
      <input type={props.type} placeholder={props.placeholder} id={props.id}></input>
    </div>
  );
}

export default Field;
