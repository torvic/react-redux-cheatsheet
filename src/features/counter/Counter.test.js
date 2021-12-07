import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

describe('<Counter/>', () => {
  test('Increment by 1, if the button increment was clicked', () => {
    /* ***************** Arrange ***************** */
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    /* ***************** Act ***************** */
    // get the button element increment
    const buttonElement = screen.getByText('+')
    // applied two click event to button element, 0 + 1 + 1 = 2
    userEvent.click(buttonElement)
    userEvent.click(buttonElement)
    /* ***************** Assert ***************** */
    // Get HTML element of counter
    const outputElement = screen.getByText('2')
    // expect to be equal 2
    expect(outputElement).toBeInTheDocument()
  })
  test('Decrement by 1, if the button decrement was clicked', () => {
    /* ***************** Arrange ***************** */
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    /* ***************** Act ***************** */
    // get the button element increment
    const buttonElement = screen.getByText('-')
    // applied two click event to button element 2 - 1 - 1 = 0
    userEvent.click(buttonElement)
    userEvent.click(buttonElement)
    /* ***************** Assert ***************** */
    // Get HTML element of counter
    const outputElement = screen.getByText('0')
    // expect '0' to be in the document
    expect(outputElement).toBeInTheDocument()
  })
})
