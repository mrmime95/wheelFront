import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { GlobalStyles } from '../src/utils/theme'
import { isEmpty } from 'ramda'

addDecorator((cb) => (
  <>
    <GlobalStyles />
    {cb()}
  </>
))

addDecorator(StoryRouter())

addParameters({
  options: {
    showRoots: true,
  },
})

configure([createStoryGroup(require.context('../src/components', true, /\.story\.js$/), 'Components')], module)

function createStoryGroup(collection, prefix) {
  collection.keys().forEach((key) => {
    const item = collection(key)

    if (isEmpty(item) || !item) {
      throw new Error(`You are probably not exporting a story correctly for component: ${key}`)
    }

    item.default.title = `${prefix}/${item.default.title}`
  })

  return collection
}
