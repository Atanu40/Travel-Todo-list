import React, { useState } from 'react'
import '../FormComponent/FormComponent.css'

function FormComponent(props) {

  const{addItem} = props;

  const [quantity,setQuantity] = useState(1);
  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const [description,setDescription] = useState('');
  const updateDescription = (e) => {
    setDescription(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    
    if (!description ) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    
    addItem(newItem);
    setDescription('')
    setQuantity(1)
  }
  
  return (
    <div className='page-width bellow-color'>
      <form className='form-content' onSubmit={formSubmit}>
        <h3 className='form-title'>What do you need for your 😍 trip?</h3>
        <div className='input-form'>
          <select className='form-option' value={quantity} onChange={updateQuantity}>
            {Array.from({length: 20},(_,i)=>i+1).map((item,index) => <option key={index} value={item}>{item}</option>)}
          </select>
          <input className='form-option' type="text" placeholder="Item..." value={description} onChange={updateDescription}/>

          <button className='form-btn'>Add</button>
        </div>
      </form> 
    </div>
  )
}

export default FormComponent
