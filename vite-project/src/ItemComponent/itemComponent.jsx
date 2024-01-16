import React from 'react'
import './itemComponent.css'
function itemComponent(props) {
  const {item,onRemoveItem,onToggleItem} = props;

  const ondelete = () => {  
    onRemoveItem(item.id);
  }

  const ontoggle = () => {
    onToggleItem(item.id);
  }

  return (
    <div>
      <li className='list-content'>
        <input type="checkbox" onChange={ontoggle} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        
        <button className='remove-btn' onClick={ondelete}>❌</button>
      </li>
    </div>
  )
}

export default itemComponent
