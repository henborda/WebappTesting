import { render, fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'


it('should increment counter if Increment button is pressed', () => {
    render(<Counter />)

    expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

    fireEvent.click(screen.getByText('Increment'))

    expect(document.querySelector('p')).toHaveTextContent('Count is: 1')
})

it('should decrement counter if Decrement button is pressed', () => {
    render(<Counter />)

    expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

    fireEvent.click(screen.getByText('Decrement'))

    expect(document.querySelector('p')).toHaveTextContent('Count is: -1')
})