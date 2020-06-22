import React from 'react'
import classNames from 'classnames' 


export  enum ButtonType {
    Paramy = 'primary',
    Default = 'default',
    Link = 'link', 
    Dashed = 'dashed'
}

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

interface BaseButtonProps{
    type?: 'primary' | 'default' | 'link' | 'dashed',
    size?: 'lg' | 'sm',
    disabled?: boolean,
    children: React.ReactNode,
    href?: string,
    danger?: boolean,
    onClick?: React.MouseEventHandler<HTMLElement>
}

const Button : React.FC<BaseButtonProps> = (props) => { 
    const wave = false 
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const {onClick} = props 
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    }  
    const {
        type,
        size,
        disabled,
        children,
        href,
        danger
    } = props  
    
    const classes = classNames('e-btn', {
        'e-wave-animation': wave,
        [`e-btn-${type}`]: type,
        [`e-btn-${size}`]: size,  
        'e-btn-danger': danger,  
        disabled: type === 'link' && disabled
    })

    if(type === 'link'){
        return <a 
            href={href} 
            className={classes} 
        >
            {children}
        </a>
    }else{
        return <button  
            className={classes} 
            disabled={disabled}
            onClick={handleClick}
            // todo
            data-t-wave-animation={wave}
        >  
            {children}
        </button>
    }
}

Button.defaultProps = {
    type: ButtonType.Default,
    disabled: false
}

export default Button