/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { COLORS } from '../../Tools/CONSTANTS';

function List({items=[],children = [], variant}) {

	let StyledComponent;
  if (variant === "scorelist") {
    StyledComponent = StyledScoreList;
  } else {
		StyledComponent = StyledUnorderedList;
		// throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <StyledComponent>
		{items.map((item,index) => <StyledListItem key={index}>{item}</StyledListItem>)}
		{children.map((item,index) => <StyledListItem key={index}>{item}</StyledListItem>)}
    </StyledComponent>
  )
}

export default List
const StyledUnorderedList = styled.ul`
	padding: 16px;
	list-style-type: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 40px;
	width: 100%;
	`

const StyledScoreList = styled.ul`
	padding: 0px;
	list-style-type: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 40px;
	width: 100%;
	z-index: 2;
	`

const StyledListItem = styled.li`
	width: 100%;
	max-width: 900px;
	text-align: center;
	font-size: 2rem;
`