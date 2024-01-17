import React, { useState } from 'react'
import './itemComponent.css'
function itemComponent(props) {
  const {item,onRemoveItem,onToggleItem} = props;

  const [checkbox,setCheckbox] = useState("false")

  const ondelete = () => {  
    onRemoveItem(item.id);
  }

  const ontoggle = (e) => {
    onToggleItem(item.id);
    setCheckbox(e.target.value==="true"?"false":"true");
  }

  console.log(checkbox);

  return (
    <div>
      <li className='list-content'>
        <input type="checkbox" value={checkbox} onChange={ontoggle} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        
        <button className='remove-btn' onClick={ondelete}>❌</button>
      </li>
    </div>
  )
}

export default itemComponent
