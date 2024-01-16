import React from 'react'

import Item from '../ItemComponent/itemComponent.jsx'
import './PackingComponent.css'

function PackingComponent(props) {

  const {item,onRemoveItem,onToggleItem} = props;

  console.log(item);

  return (
    <div className='packing-list'>
      <div className='page-width'>
        <ul className='packing-order'>
          {item.map((item,index) => <Item key={index} item={item} onRemoveItem={onRemoveItem} onToggleItem={onToggleItem}/>)}
        </ul>
      </div>
    </div>

  )
}

export default PackingComponent
