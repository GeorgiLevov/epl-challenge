/* eslint-disable react/prop-types */
import styled from "styled-components";
import { COLORS } from "../Tools/CONSTANTS";


const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "6px 12px",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "14px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 24 / 16 + "rem",
    "--padding": "20px 40px"
  }
};

const Button = ({ variant, size, children, onClick=()=>{return;}})=> {
	const styles = SIZES[size];
	
	let StyledComponent;
  if (variant === "fill") {
    StyledComponent = FillButton;
  } else if (variant === "outline") {
    StyledComponent = OutlineButton;
  } else if (variant === "ghost") {
    StyledComponent = GhostButton;
  } else {
		throw new Error(`Unrecognized Button variant: ${variant}`);
  }
	
	
	return <StyledComponent role="button" style={styles} onClick={()=> onClick()}>{children}</StyledComponent>;
}	


const ButtonBase = styled.button`
  line-height: 1.25;
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  font-weight: 600;
	
  position: relative;
	display: inline-flex;
  justify-content: center;
  align-items: center;

  min-height: 48px;
  min-width: 175px;
  width: auto;
  margin: 0;
  padding: var(--padding);
  vertical-align: baseline;
  border: 2px solid transparent;
  border-radius: var(--borderRadius);
  
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  transition: all 100ms;
  touch-action: manipulation;

	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	
	  &:hover,
		&:focus {
			box-shadow: hsla(0, 0%, 0%, 0.1) 0 4px 12px;
			outline-color: ${COLORS.primary};
			outline-offset: 4px;

		}
	  &:hover {
			transform: translateY(-1px);
		}
		
	  &:active {
			border-color: ${COLORS.primary};
			transform: translateY(0);
		}
`

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
		border-color: ${COLORS.primaryLight};
  }
`;
const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;


export default Button;
