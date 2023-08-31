/* eslint-disable react/prop-types */
import './Nav.css'

function Nav({items=[],children}) {

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

export default Nav
