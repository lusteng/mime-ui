import React from 'react'; 
// 引入组件 
import Button from './components/Button/button'
import "./styles/index.scss"
import './App.css';

function App() {
  const handleClick = () => {
    console.log(2312332);
    
  }
  return (
    <div className="App" style={{paddingTop: "100px"}}> 

    <p>

    <Button  
      onClick={handleClick}
      type='primary' 
      size="lg"
      danger
    >dddd</Button> 
&nbsp;
    <Button  
      type='primary'
      disabled
      size="lg"
      danger
    >dddd</Button>
<br/>
    </p>
<p>

<Button   
      type='default' 
      danger
    >dddd</Button>
    &nbsp;
<Button  
      type='default'
      disabled
    >dddd</Button>
    <br/>
</p>  
<p>

<Button  
      type='link' 
      danger
    >dddd</Button>
    &nbsp;
    <Button  
      type='link'
      disabled
    >dddd</Button>
</p>
<p>

<Button  
      type='dashed' 
      size="lg"
      danger
    >dashed</Button>
    &nbsp;
    <Button  
      type='dashed'
      size="lg"
      disabled
    >dashed</Button>
</p>
  
      <h3>fffff</h3> 
      <h4>fffff</h4>
    </div>
  );
}

export default App;
