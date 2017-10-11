import LoaderE from './LoaderE'
import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it, expect } from 'utilities/jest'

describe('Test LoaderE', () => {
  it('should be able to render the component', () => {
    const component = renderer.create(
      <LoaderE />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
