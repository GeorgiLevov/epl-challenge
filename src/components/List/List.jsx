/* eslint-disable react/prop-types */
import styled from 'styled-components';

function List({items=[],children = []}) {

  return (
    <StyledUnorderedList>
		{items.map((item,index) => <StyledListItem key={index}>{item}</StyledListItem>)}
		{children.map((item,index) => <StyledListItem key={index}>{item}</StyledListItem>)}
    </StyledUnorderedList>
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

const StyledListItem = styled.li`
	width: 100%;
	max-width: 900px;
	text-align: center;
	font-size: 2rem;
`