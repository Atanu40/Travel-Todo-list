import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Logo from './LogoComponent/LogoComponent.jsx'
import Form from './FormComponent/FormComponent.jsx'
import Packing from './PackingComponent/PackingComponent.jsx'

function App() {
  const [item, setItem] = useState([]);

  const addItem = (newItem) => {
    setItem([...item, newItem]);
  }

  const removeItem = (id) => {
    setItem(item.filter((item) => item.id !== id));
  }

  const toggleItem = (id) => {
    setItem(item.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    }));
  }

  return (
    <div className='body-content'>
      <Logo />
      <Form addItem={addItem}/>
      <Packing item={item} onRemoveItem={removeItem} onToggleItem={toggleItem}/>
    </div>
  )
}

export default App
