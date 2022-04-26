import React from "react";

function Icon({ icon, onClick, title, description }) {
  return (
    <div>
      <div>
        <i className={icon} onClick={onClick}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Icon;
