import FunLoader from './FunLoader'
import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it, expect } from 'utilities/jest'

describe('Test FunLoader', () => {
  it('should be able to render the component', () => {
    const component = renderer.create(
      <FunLoader />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
