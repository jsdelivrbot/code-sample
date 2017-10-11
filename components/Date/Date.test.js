import DateE from './DateE'
import React from 'react'
import sinon from 'sinon'
import renderer from 'react-test-renderer'
import { describe, it, expect, beforeEach, afterEach } from 'utilities/jest'

describe('Test DateE', () => {
  let clock = null

  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })

  it('should be able to render the component', () => {
    const component = renderer.create(
      <DateE />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  afterEach(() => {
    clock.restore()
  })
})
