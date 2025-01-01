import React from "react";
import Button from "../Button";
import styled from "styled-components/macro";

function HoveringButtonMenu() {
  return (
    <HoveringMenuWrapper>
      <Button variant="outline">Modern</Button>
      <Button variant="outline">Legacy</Button>
    </HoveringMenuWrapper>
  );
}

export default HoveringButtonMenu;

const HoveringMenuWrapper = styled.div`
  /* needs buttons to show horizontal
    needs buttons to be flexed centered
    needs to scale appropriately for desktop
    needs to stay hovering on bottom 
    and not move around for desktop stay in the same location vertically and horizontally 
    it could be targeted the same way across devices
    maybe 5% coming from 'down' and centered horizontally */
`;
