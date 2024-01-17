import React, { useState } from 'react'

import Item from '../ItemComponent/itemComponent.jsx'
import './PackingComponent.css'

function PackingComponent(props) {

  const {item,onRemoveItem,onToggleItem,onChange} = props;

  const [select,setSelect] = useState("input");

  const onselectUpdate = (e) => { 
    setSelect(e.target.value);
    switch (e.target.value) {
      case "input":
        item.sort((a,b) => a.id - b.id);
        break;
      case "description":
        console.log("description");
        item.sort((a,b) => a.description.localeCompare(b.description));
        break;
      case "packed":
        item.sort((a,b) => a.packed - b.packed);
        break;
      default:
        break;
    }
  }

  const clearBtn = () => {  
    onChange();
  }

  return (
    <div className='packing-list'>
      <div className='page-width'>
        <div className='cont-packing'>
          <ul className='packing-order'>
            {item.map((item,index) => <Item key={index} item={item} onRemoveItem={onRemoveItem} onToggleItem={onToggleItem}/>)}
          </ul>

          <div className='action'>
            <select className='update' value={select} onChange={onselectUpdate} >
              <option value='input'>Sort by input order</option>
              <option value='description'>Sort by description</option>
              <option value='packed'>Sort by packed status</option>
            </select>
            <button onClick={clearBtn} className='update'>Clear list</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PackingComponent
