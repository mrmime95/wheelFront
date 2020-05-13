import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import API from '../../utils/API'

import Button from '../../components/Button'
import Table from '../../components/Table'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import CartContext from '../../context/cartContext'
//import Slider from 'react-slick'

import { COLORS, TRANSITION } from '../../utils/theme'
import backgroundImg from '../../images/Background.jpg'
import { ReactComponent as Vehicles } from '../../components/icons/vehicles.svg'
import { ReactComponent as Trucks } from '../../components/icons/trucks.svg'
import { ReactComponent as Agriculture } from '../../components/icons/agriculture.svg'
import { ReactComponent as InnerTubes } from '../../components/icons/inner_tubes.svg'
import { ReactComponent as SkidChains } from '../../components/icons/skid_chains.svg'
import { ReactComponent as Rims } from '../../components/icons/rims.svg'
import { ReactComponent as SummerIcon } from '../../components/icons/summer.svg'
import { ReactComponent as WinterIcon } from '../../components/icons/winter.svg'
/* import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' */

const Wrapper = styled.div`
  color: ${COLORS.white};
`

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
  }
  & h5 {
    font-size: 2.3rem;
    font-weight: normal;
  }
`

const Description = styled.div`
  display: flex;
  padding: 0 0 35px;
`

const Brand = styled.div`
  padding: 0 110px 0 0;
  & h3 {
    font-size: 4.8rem;
    font-weight: 700;
  }
  & h5 {
    font-size: 2rem;
    font-weight: 400;
  }
`

const Type = styled.div`
  & p {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  & svg {
    width: 45px;
    height: 45px;
    path {
      fill: ${COLORS.white};
    }
  }
`

const Price = styled.div`
  padding: 0 0 45px;
  & h4 {
    font-size: 4.8rem;
    font-weight: 700;
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
  padding: 20px 0 20px 30px;
`

const BrandTitle = styled.h4`
  color: ${COLORS.dark};
  font-size: 3rem;
  font-weight: 700;
  padding: 0 0 10px;
  border-bottom: 1px solid ${COLORS.blue};
`

const CardContainer = styled.div`
  padding: 45px 0 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const categories = [
  { id: 0, name: 'cars', image: <Vehicles />, text: 'Cars / Off Road Vehicles ATV' },
  { id: 1, name: 'trucks', image: <Trucks />, text: 'Trucks' },
  { id: 2, name: 'agriculture', image: <Agriculture />, text: 'Agriculture' },
  { id: 3, name: 'inner', image: <InnerTubes />, text: 'Inner tubes' },
  { id: 4, name: 'skid', image: <SkidChains />, text: 'Skid chains' },
  { id: 5, name: 'rims', image: <Rims />, text: 'Rims' },
]

const brands = [
  { id: 1, name: 'Pirelli', text: 'Pirelli' },
  { id: 2, name: 'Michelin', text: 'Michelin' },
  { id: 3, name: 'Hankook', text: 'Hankook' },
  { id: 4, name: 'Good Year', text: 'Good Year' },
  { id: 5, name: 'Maxxis', text: 'Maxxis' },
  { id: 6, name: 'Hartland', text: 'Hartland' },
  { id: 7, name: 'Dunlop', text: 'Dunlop' },
  { id: 8, name: 'Bridgestone', text: 'Bridgestone' },
]

function Home() {
  const [categoryState, setCategoryState] = useState()
  const [brandState, setBrandState] = useState([])
  const [productsByBrands, setProductsByBrands] = useState([])
  const [promo, setPromo] = useState()
  const [loadingProducts, setLoadingProducts] = useState(false)

  const cart = useContext(CartContext).cart
  const { addToCart, getProductIndexById } = useContext(CartContext).functions

  useEffect(() => {
    getFilteredProductList()
    getPromoProduct()
  }, [])

  return (
    <Wrapper>
      <BackgroundImage src={backgroundImg} alt="wheel background"></BackgroundImage>
      <TitleContainter>
        <h1>Best Offers on Winter Tires</h1>
        <h5>Tires for cars, trucks, vans and agricultural vehicles</h5>
      </TitleContainter>
      <Promotion>
        <Description>
          <Brand>
            <h3>{promo && promo.brand}</h3>
            <h5>{promo && promo.category}</h5>
          </Brand>
          {promo && (
            <Type>
              {!!promo.summer ? (
                <>
                  <SummerIcon />
                  <p>summer</p>
                </>
              ) : (
                <>
                  <WinterIcon />
                  <p>winter</p>
                </>
              )}
            </Type>
          )}
        </Description>
        <Price>
          <h4>{promo && `${promo.oldPrice} LEI`}</h4>
          <h3>{promo && `${promo.newPrice}LEI`}</h3>
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
          {loadingProducts ? (
            <Loading></Loading>
          ) : (
            Object.keys(productsByBrands).map((key) => (
              <React.Fragment key={key}>
                <BrandTitle>{key}</BrandTitle>
                <CardContainer>
                  {productsByBrands[key].map((product) => {
                    const productIndex = getProductIndexById(product.id)
                    return (
                      <Card
                        key={product.id}
                        title={product.brand}
                        subtitle={product.category}
                        summer={!!product.summer}
                        type={product.type}
                        number={product.number}
                        letter={product.letter}
                        fuel={product.fuel}
                        rain={product.rain}
                        sound={product.sound}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        pieceNumber={product.pieceNumber - (productIndex >= 0 ? cart[productIndex].amount : 0)}
                        onAddToCart={(piece) => addToCart(product, Number(piece))}
                      />
                    )
                  })}
                </CardContainer>
              </React.Fragment>
            ))
          )}
        </CardsList>
      </LastSection>
    </Wrapper>
  )

  function handleCategoryChanged(newCategoryName) {
    const categoryName = categoryState === newCategoryName ? undefined : newCategoryName
    setCategoryState(categoryName)
    getFilteredProductList({ useFor: categoryName, brands: brandState })
  }

  function handleBrandChanged(newBrand) {
    const newBrandsList = brandState.includes(newBrand)
      ? brandState.filter((brand) => newBrand !== brand)
      : [...brandState, newBrand]
    setBrandState(newBrandsList)

    getFilteredProductList({ brands: newBrandsList, useFor: categoryState })
  }

  async function getFilteredProductList({ brands, useFor } = {}) {
    setLoadingProducts(true)
    try {
      const resp = await API.product.get({ brands, useFor })
      setProductsByBrands(resp)
    } catch (e) {
      alert(e.message)
    }
    setLoadingProducts(false)
  }

  async function getPromoProduct() {
    try {
      const resp = await API.product.getAPromotion()
      setPromo(resp)
    } catch (e) {
      alert(e.message)
    }
  }
}

export default Home
