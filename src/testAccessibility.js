import React from 'react'

import { render } from '@testing-library/react';
const { axe, configureAxe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

let config = {
  impactLevels: ['critical'],
  rules: {
    'color-contrast': { enabled: false }
  }
}

async function testAccessibility(El) {
  let { container } = render(<El />)
  let results =  await axe(container, config)
  return expect(results).toHaveNoViolations()
}

export default testAccessibility
