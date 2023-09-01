/* eslint-disable react/prop-types */
import './List.css'

function List({items=[],children}) {

const listitems = items.map((item,index) => {
		return <li key={index} style={{fontSize:"2rem"}}>{item}</li>
	});


  return (
    <ul>
		{listitems}
		{children}
    </ul>
  )
}

export default List
