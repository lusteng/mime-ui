import React from 'react';
// 引入组件 
import Button from './components/Button/button';
import "./styles/index.scss";
import './App.css';
function App() {
    return React.createElement(React.Fragment, null,
        React.createElement(Button, { type: "primary" }, "Primary Button"),
        React.createElement(Button, null, "Default Button"),
        React.createElement(Button, { type: "dashed" }, "Dashed Button"),
        React.createElement("br", null),
        React.createElement(Button, { type: "info" }, "Link Button"),
        React.createElement(Button, { type: "success" }, "Link Button"),
        React.createElement(Button, { type: "warning" }, "Link Button"),
        React.createElement(Button, { type: "error" }, "Link Button"));
}
export default App;
