import React from 'react';
// 引入组件 
import Button from './components/Button/button';
import "./styles/index.scss";
import './App.css';
function App() {
    var handleClick = function () {
        console.log(2312332);
    };
    return (React.createElement("div", { className: "App", style: { paddingTop: "100px" } },
        React.createElement("p", null,
            React.createElement(Button, { onClick: handleClick, type: 'primary', size: "lg", danger: true }, "dddd"),
            "\u00A0",
            React.createElement(Button, { type: 'primary', disabled: true, size: "lg", danger: true }, "dddd"),
            React.createElement("br", null)),
        React.createElement("p", null,
            React.createElement(Button, { type: 'default', danger: true }, "dddd"),
            "\u00A0",
            React.createElement(Button, { type: 'default', disabled: true }, "dddd"),
            React.createElement("br", null)),
        React.createElement("p", null,
            React.createElement(Button, { style: { "color": "yellow", border: "1px solid red" }, type: 'link', href: "http://www.baidu.c", danger: true }, "red dddd"),
            "\u00A0",
            React.createElement(Button, { type: 'link', disabled: true }, "dddd")),
        React.createElement("p", null,
            React.createElement(Button, { type: 'dashed', size: "lg", danger: true }, "dashed"),
            "\u00A0",
            React.createElement(Button, { type: 'dashed', size: "lg", disabled: true }, "dashed")),
        React.createElement("h3", null, "fffff"),
        React.createElement("h4", null, "fffff")));
}
export default App;
