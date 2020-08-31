import React, { ReactElement, Component } from 'react'
import { render } from '@testing-library/react'
import Button from '../button'

const testButton = (Component: React.ReactElement) => {
    const wrapper = render(Component)
    const element = wrapper.getByText('')
    expect(element).toBeInTheDocument()
}

describe('test default button commponent', () => {
    it('test default button class', () => {
        const wrapper = render(<Button>default</Button>);
        const element = wrapper.getByText('default'); 
        expect(element).toBeInTheDocument()  
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('e-btn e-btn-default')
    })
    it('test default large button size', () => {
        const wrapper = render(<Button size="lg">large</Button>)
        const element = wrapper.getByText('large')
        expect(() => {

        }).not.toThrow()
        expect(element).toHaveClass('e-btn e-btn-default e-btn-lg')
    })
}) 
 