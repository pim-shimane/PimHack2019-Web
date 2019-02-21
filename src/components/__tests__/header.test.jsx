import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Header from '../header'

afterEach(cleanup)

describe('<Header />', () => {
  test('rendered', () => {
    const rendered = render(<Header />)
    expect(rendered).toBeTruthy()
  })
})
