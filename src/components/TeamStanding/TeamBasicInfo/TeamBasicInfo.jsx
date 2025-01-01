import React from "react";
import styled from "styled-components/macro";
function TeamBasicInfo({ position, name, logo }) {
  return (
    <TeamInfoWrapper>
      <div>{position}</div>
      <span>{name}</span>
      <TeamLogo src={logo} width={100} />
    </TeamInfoWrapper>
  );
}

export default TeamBasicInfo;

const TeamInfoWrapper = styled.div`
  display: flex;
  min-width: 100px;
  width: 100%;
  min-height: 100px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const TeamLogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
`;
