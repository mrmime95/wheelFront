import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../../images/HeaderLogo.png'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Table from '../../components/Table'
import Card from '../../components/Card'

import { COLORS, FONT_FAMILY, TRANSITION } from '../../utils/theme'
import backgroundImg from '../../images/Background.png'
import { ReactComponent as Vehicles } from '../../components/icons/vehicles.svg'
import { ReactComponent as Trucks } from '../../components/icons/trucks.svg'
import { ReactComponent as Agriculture } from '../../components/icons/agriculture.svg'
import { ReactComponent as InnerTubes } from '../../components/icons/inner_tubes.svg'
import { ReactComponent as SkidChains } from '../../components/icons/skid_chains.svg'
import { ReactComponent as Rims } from '../../components/icons/rims.svg'
import { ReactComponent as SummerIcon } from '../../components/icons/summer.svg'
import { ReactComponent as WinterIcon } from '../../components/icons/winter.svg'

const Wrapper = styled.div`
  max-width: 1500px;
  padding: 40px;
  margin: 0 auto;
  color: ${COLORS.white};
`

const StyledHeader = styled(Header)``

const BackgroundImage = styled.img`
  position: absolute;
  height: 930px;
  left: 0;
  top: 0;
  z-index: -1;
  object-fit: cover;
`

const TitleContainter = styled.div`
  padding: 100px 0 150px 0;
  & h1 {
    font-size: 6.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
  }
  & h5 {
    font-size: 2.3rem;
    font-weight: normal;
    font-family: ${FONT_FAMILY.roboto};
  }
`

const Description = styled.div`
  display: flex;
  padding: 0 0 35px;
`

const Brand = styled.div`
  & h3 {
    font-size: 4.8rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
  }
  & h5 {
    font-size: 2rem;
    font-weight: 400;
    font-family: ${FONT_FAMILY.roboto};
  }
`

const Type = styled.div`
  & p {
    font-size: 1.4rem;
    font-weight: 700;
    font-family: ${FONT_FAMILY.roboto};
  }
`

const Price = styled.div`
  padding: 0 0 45px;
  & h4 {
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
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${FONT_FAMILY.roboto};
  width: 15%;
  height: 100px;
  transition: background-color ${TRANSITION}, color ${TRANSITION}, fill ${TRANSITION};
  ${({ active }) =>
    !active
      ? `
      background-color:${COLORS.white};
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
const LastSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 65px 0 0;
`
const BrandList = styled(Table)`
  flex: 1;
`

const BrandButton = styled(Button)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${FONT_FAMILY.roboto};
  width: 100%;
  transition: background-color ${TRANSITION}, color ${TRANSITION}, fill ${TRANSITION};
  &:first-child {
    border-radius: 3px 3px 0 0;
  }
  &:last-child {
    border-radius: 0 0 3px 3px;
  }
  background-color: ${`${COLORS.gray}4D`};
  color: ${COLORS.dark};
  box-shadow: none;
  ${({ active }) =>
    active &&
    `
    background-color:${COLORS.blue};
      color: ${COLORS.white};`}
`

const CardsList = styled.div`
  flex: 5;
`

const categories = [
  { id: 0, name: 'vehicles', image: <Vehicles />, text: 'Cars / Off Road Vehicles ATV' },
  { id: 1, name: 'trucks', image: <Trucks />, text: 'Trucks' },
  { id: 2, name: 'agriculture', image: <Agriculture />, text: 'Agriculture' },
  { id: 3, name: 'innerTubes', image: <InnerTubes />, text: 'Inner tubes' },
  { id: 4, name: 'skidChains', image: <SkidChains />, text: 'Skid chains' },
  { id: 5, name: 'rims', image: <Rims />, text: 'Rims' },
]

const brands = [
  { id: 0, name: 'Michelin', text: 'Michelin' },
  { id: 1, name: 'Michelin2', text: 'Michelin2' },
]

const productsByBrands = [
  {
    brand: 'Michelin',
    products: [
      {
        id: 0,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 3,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 4,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 5,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 6,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 7,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 8,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 9,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 10,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
    ],
  },
  {
    brand: 'Pirelli',
    products: [
      {
        id: 0,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 2,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 1,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 5,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
      {
        id: 6,
        title: 'Pirelli',
        subtitle: 'P Zero',
        summer: true,
        type: '205/55/R16',
        number: 82,
        letter: 'T',
        fuel: 'g',
        rain: 'e',
        sound: 73,
        oldPrice: '475.00 LEI',
        newPrice: '475.00 LEI',
        pieceNumber: 4,
      },
    ],
  },
]

function Home() {
  const [categoryState, setCategoryState] = useState()
  const [brandState, setBrandState] = useState([])
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
            <SummerIcon />
            <p>Winter</p>
          </Type>
        </Description>
        <Price>
          <h4>475.00 LEI</h4>
          <h3>475.00 LEI</h3>
        </Price>
        <StyledButton>Find out more</StyledButton>
      </Promotion>
      <section>
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
      </section>
      <LastSection>
        <BrandList data={brands}>
          {(brand) => (
            <BrandButton
              key={`${brand.id}${brand.text}`}
              active={brandState.includes(brand.name)}
              onClick={() => handleBrandChanged(brand.name)}
            >
              {brand.text}
            </BrandButton>
          )}
        </BrandList>
        <CardsList>
          {productsByBrands.map((productsByBrand) => (
            <React.Fragment key={productsByBrand.brand}>
              <h4>{productsByBrand.brand}</h4>
              {productsByBrand.products.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  subtitle={product.subtitle}
                  summer={product.summer}
                  type={product.type}
                  number={product.number}
                  letter={product.letter}
                  fuel={product.fuel}
                  rain={product.rain}
                  sound={product.sound}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  pieceNumber={product.pieceNumber}
                  onAddToCart={(value) => console.log(value)}
                />
              ))}
            </React.Fragment>
          ))}
        </CardsList>
      </LastSection>
    </Wrapper>
  )

  function handleCategoryChanged(newCategoryName) {
    setCategoryState(newCategoryName)
  }

  function handleBrandChanged(newBrand) {
    setBrandState(
      brandState.includes(newBrand) ? brandState.filter((brand) => newBrand !== brand) : [...brandState, newBrand]
    )
  }
}

export default Home
