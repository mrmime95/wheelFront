import React from 'react'
import Card from './index'

export default {
  title: 'Card',
}

export const DefaultView = () => (
  <Card
    title="Pirelli"
    subtitle="P Zero"
    summer
    type="205/55/R16"
    number={82}
    letter="T"
    fuel="g"
    rain="e"
    sound={73}
    oldPrice={475.0}
    newPrice={475.0}
    pieceNumber={4}
    onAddToCart={(value) => console.log(value)}
  />
)
