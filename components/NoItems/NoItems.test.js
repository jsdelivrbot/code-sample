import NoItemsE from './NoItemsE'
import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it, expect } from 'utilities/jest'

describe('Test NoItemsE', () => {
  it('should be able to render the component', () => {
    const component = renderer.create(
      <NoItemsE />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
