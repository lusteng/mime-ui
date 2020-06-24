import React, { useState, useEffect } from 'react';
export var Test = function (props) {
    var _a = useState(0), count = _a[0], setcount = _a[1];
    useEffect(function () {
        document.title = 'ffffffffff' + count;
    }, []);
    useEffect(function () {
        console.log(props);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, count),
        React.createElement("button", { onClick: function (e) { return setcount(count + 1); } }, "\u6539\u53D8")));
};
