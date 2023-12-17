// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Import the jest-dom library
import UrlFrame from '../src/components/UrlFrame'

describe('UrlFrame', () => {
  it('renders an iframe with the correct src', () => {
    const testUrl = 'http://test.com'
    render(<UrlFrame url={testUrl} />)

    const iframe = screen.getByRole('iframe')
    expect(iframe).toHaveAttribute('src', testUrl)
  })
})