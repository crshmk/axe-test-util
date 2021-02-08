import React from 'react'
import { render, fireEvent } from '@testing-library/react';

import App from '../'

test('mounts App', function() {
  let { getByText } = render(<App />)
  expect(getByText('hi')).toBeTruthy()
})
