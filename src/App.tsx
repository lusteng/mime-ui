import React from 'react'; 
// 引入组件 
import Button from './components/Button/button'
import "./styles/index.scss"
import './App.css';

function App() {  
  return <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br /> 
      <Button type="link">Link Button</Button>
  </>
}
export default App;
