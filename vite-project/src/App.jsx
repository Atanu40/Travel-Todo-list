import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Logo from './LogoComponent/LogoComponent.jsx'
import Form from './FormComponent/FormComponent.jsx'

function App() {
  
  return (
    <div className='body-content'>
      <Logo />
      <Form />
    </div>
  )
}

export default App
