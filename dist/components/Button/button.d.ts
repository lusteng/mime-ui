import React from 'react';
export declare enum ButtonType {
    Paramy = "primary",
    Default = "default",
    Link = "link",
    Dashed = "dashed"
}
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
interface BaseButtonProps {
    type?: 'primary' | 'default' | 'link' | 'dashed';
    size?: 'lg' | 'sm';
    disabled?: boolean;
    children: React.ReactNode;
    href?: string;
    danger?: boolean;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Button: React.FC<BaseButtonProps>;
export default Button;
