import React from "react";

function TeamBasicInfo({ position, name, logo }) {
  return (
    <div>
      <div>{position}</div>
      <span>{name}</span>
      <img src={logo} width={100} />
    </div>
  );
}

export default TeamBasicInfo;
