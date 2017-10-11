import Error404 from './Error404'
import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it, expect } from 'utilities/jest'

describe('Test Error404', () => {
  it('should be able to render the component', () => {
    const component = renderer.create(
      <Error404 />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
