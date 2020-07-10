import React from 'react'; 
// 引入组件 
import Button from './components/Button/button'
import "./styles/index.scss"
import './App.css';

function App() {  
  return <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed" disabled>Dashed Button</Button> 
      <Button type="success" disabled>Dashed Button</Button> 
      <Button type="success" disabled>Dashed Button</Button> 
      <Button type="error" disabled>Dashed Button</Button> 
      <Button type="warning" disabled>Dashed Button</Button> 
      <Button type="info" disabled>Dashed Button</Button> 
      <Button type="link" target="_self" href="www.baidu.com">link</Button>
  </>
}
export default App;
