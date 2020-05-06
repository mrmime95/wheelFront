import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../../images/HeaderLogo.png'
import Header from '../../components/Header'
import Button from '../../components/Button'

import { COLORS, FONT_FAMILY, TRANSITION } from '../../utils/theme'
import backgroundImg from '../../images/Background.png'
import { ReactComponent as Vehicles } from '../../components/icons/vehicles.svg'
import { ReactComponent as Trucks } from '../../components/icons/trucks.svg'
import { ReactComponent as Agriculture } from '../../components/icons/agriculture.svg'
import { ReactComponent as InnerTubes } from '../../components/icons/inner_tubes.svg'
import { ReactComponent as SkidChains } from '../../components/icons/skid_chains.svg'
import { ReactComponent as Rims } from '../../components/icons/rims.svg'

const Wrapper = styled.div`
  max-width: 1500px;
  padding: 40px;
  margin: 0 auto;
  color: ${COLORS.white};
`

const StyledHeader = styled(Header)``

const BackgroundImage = styled.img`
  position: absolute;
  max-height: 930px;
  left: 0;
  top: 0;
  z-index: -1;
`

const TitleContainter = styled.div`
  padding: 100px 0 150px 0;
  & h1 {
    font-size: 6.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
    margin: 0;
  }
  & h5 {
    font-size: 2.3rem;
    font-weight: normal;
    font-family: ${FONT_FAMILY.roboto};
    margin: 0;
  }
`

const Description = styled.div`
  display: flex;
  padding: 0 0 35px;
`

const Brand = styled.div`
  & h3 {
    margin: 0;
    font-size: 4.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
  }
  & h5 {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY.roboto};
  }
`

const Type = styled.div`
  & p {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
  }
`

const Price = styled.div`
  padding: 0 0 55px;
  & h4 {
    margin: 0;
    font-size: 4.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
    font-style: italic;
    position: relative;
    display: inline-block;
    line-height: 0.8;
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      height: 7px;
      background-color: ${COLORS.white};
    }
  }
  & h3 {
    margin: 0;
    font-size: 6rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
    color: #418ef6;
    line-height: 1;
  }
`

const Promotion = styled.div`
  padding: 0 0 130px;
`

//Possible this is the Primary Button
const StyledButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 15px 35px;
`

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
`
const CategoryButton = styled(Button)`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 220px;
  height: 100px;
  transition: background-color ${TRANSITION}, color ${TRANSITION}, fill ${TRANSITION};
  ${({ active }) =>
    !active
      ? `background-color:${COLORS.white};
        color: ${COLORS.gray};
        & svg path {
        fill: ${COLORS.gray};
      }`
      : `& svg path {
          fill: ${COLORS.white};
        }`}
  & span {
    padding: 10px 0 0;
  }
`

const categories = [
  { id: 0, name: 'vehicles', image: <Vehicles />, text: 'Cars / Off Road Vehicles ATV' },
  { id: 1, name: 'trucks', image: <Trucks />, text: 'Trucks' },
  { id: 2, name: 'agriculture', image: <Agriculture />, text: 'Agriculture' },
  { id: 3, name: 'innerTubes', image: <InnerTubes />, text: 'Inner tubes' },
  { id: 4, name: 'skidChains', image: <SkidChains />, text: 'Skid chains' },
  { id: 5, name: 'rims', image: <Rims />, text: 'Rims' },
]

function Home() {
  const [categoryState, setCategoryState] = useState()
  return (
    <Wrapper>
      <BackgroundImage src={backgroundImg} alt="wheel background"></BackgroundImage>
      <StyledHeader logo={logo} />
      <TitleContainter>
        <h1>Best Offers on Winter Tires</h1>
        <h5>Tires for cars, trucks, vans and agricultural vehicles</h5>
      </TitleContainter>
      <Promotion>
        <Description>
          <Brand>
            <h3>Pirelli</h3>
            <h5>P Zero</h5>
          </Brand>
          <Type>
            <img></img>
            <p>Winter</p>
          </Type>
        </Description>
        <Price>
          <h4>475.00 LEI</h4>
          <h3>475.00 LEI</h3>
        </Price>
        <StyledButton>Find out more</StyledButton>
      </Promotion>
      <Categories>
        {categories.map((category) => (
          <CategoryButton
            key={`${category.id}${category.text}`}
            active={category.name === categoryState}
            onClick={() => handleCategoryChanged(category.name)}
          >
            {category.image}
            <span>{category.text}</span>
          </CategoryButton>
        ))}
      </Categories>
    </Wrapper>
  )
  function handleCategoryChanged(newCategoryName) {
    setCategoryState(newCategoryName)
  }
}

export default Home
