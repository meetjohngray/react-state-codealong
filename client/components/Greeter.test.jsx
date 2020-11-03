import React from 'react'
import Greeter from './Greeter'
import { render, screen,fireEvent } from '@testing-library/react'
import { TestScheduler } from 'jest'

describe('<Greeter />', () => {
  test("shows a greeting", () => {
    render(<Greeter greeting="yo aihe" />)
    let heading = screen.getByRole('heading')
    expect(heading.innerHTML).toContain('yo aihe')
  })

})