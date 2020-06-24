var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
export var ButtonType;
(function (ButtonType) {
    ButtonType["Paramy"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Link"] = "link";
    ButtonType["Dashed"] = "dashed";
})(ButtonType || (ButtonType = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
var Button = function (props) {
    var _a;
    var wave = false;
    var handleClick = function (e) {
        var onClick = props.onClick;
        if (onClick) {
            onClick(e);
        }
    };
    var type = props.type, size = props.size, disabled = props.disabled, danger = props.danger, children = props.children, href = props.href, others = __rest(props, ["type", "size", "disabled", "danger", "children", "href"]);
    var classes = classNames('e-btn', (_a = {
            'e-wave-animation': wave
        },
        _a["e-btn-" + type] = type,
        _a["e-btn-" + size] = size,
        _a['e-btn-danger'] = danger,
        _a.disabled = type === 'link' && disabled,
        _a));
    if (type === 'link') {
        return React.createElement("a", __assign({ href: href }, others, { className: classes }), children);
    }
    else {
        return React.createElement("button", __assign({ className: classes, disabled: disabled, onClick: handleClick }, others, { "data-t-wave-animation": wave }), children);
    }
};
Button.defaultProps = {
    type: ButtonType.Default,
    disabled: false
};
export default Button;
