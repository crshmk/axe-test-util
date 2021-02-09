import testAccessibility from '../../testAccessibility'

import App from '../'

describe('App', function() {

  test('accessibility', async function() {
     await testAccessibility(App)
  })

})
