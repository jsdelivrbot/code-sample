import AppE from './AppE'
import React from 'react'
import renderer from 'react-test-renderer'
import { describe, it, expect } from 'utilities/jest'

describe('Test App', () => {
  it('should be able to render the default component', () => {
    const component = renderer.create(<AppE />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
