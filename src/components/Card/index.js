import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import { COLORS, FONT_FAMILY } from '../../utils/theme'
import { range, twoDecimals } from '../../utils/number'

import { ReactComponent as SummerIcon } from '../../components/icons/summer.svg'
import { ReactComponent as WinterIcon } from '../../components/icons/winter.svg'
import { ReactComponent as InfoIcon } from '../../components/icons/Info.svg'
import { ReactComponent as FuelIcon } from '../../components/icons/fuel.svg'
import { ReactComponent as RainIcon } from '../../components/icons/rain.svg'
import { ReactComponent as SoundIcon } from '../../components/icons/voice.svg'
import { ReactComponent as CartIcon } from '../../components/icons/cart.svg'
import backgroundImg from '../../images/wheel.jpg'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 230px;
  padding: 25px 20px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  color: ${COLORS.dark};
  margin: 0 0 20px;
`

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const TitleSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

const Brand = styled.div`
  & h6 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 0.8;
  }
  & p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }
`

const Weather = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    width: 33px;
    height: 33px;
  }
  & p {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.softDark};
  }
`

const FeatureSection = styled.div`
  padding: 15px 0;
  line-height: 1;
`
const Features = styled.div`
  position: relative;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.02em;
`
const More = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: -10px;
  top: 0;
  & p {
    margin: 0 10px 0 0;
    letter-spacing: 0.02em;
  }
`
export const AbleContainer = styled.div`
  display: flex;
  padding: 10px 0 0;
`
export const Able = styled.div`
  border-radius: 2px;
  color: ${COLORS.white};
  background-color: ${({ color }) => COLORS[color]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 25px;
  padding: 7px;
  margin: 0 5px 0 0;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: ${FONT_FAMILY.lato};
`
const Old = styled.p`
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  font-style: italic;
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${COLORS.hardDark};
  }
`
const New = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.blue};
`
const Available = styled.p`
  color: ${COLORS.green};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
`
const Unavailable = styled(Available)`
  color: red;
`

const BuySection = styled.div``
const StyledButton = styled(Button)`
  margin: 15px 0 20px;
  padding: 7px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;

  select {
    width: 40px;
    height: 30px;
    margin: 0 15px 0 0;
  }
  svg {
    width: 20px;
    height: 15px;
    path {
      fill: ${COLORS.white};
    }
  }
  span {
    margin: 0 15px;
  }
`
const StyledSelect = styled.select`
  margin-bottom: 0;
  border-radius: 2px;
  box-shadow: 0px 0px 3px 0px rgba(43, 48, 61, 0.3) inset;
  font-size: 1.4rem;
  border: 1px solid ${COLORS.disabledGray};
  width: 100%;
  color: ${COLORS.black};
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  padding: 5px 10px;
  position: relative;
  :after {
    content: '';
    border: solid #000000;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    right: 20px;
    top: 40%;
    transform: rotate(45deg) translateX(-50%);
  }
`

function Card({
  title,
  subtitle,
  summer = false,
  type,
  number,
  letter,
  fuel,
  rain,
  sound,
  oldPrice,
  newPrice,
  pieceNumber,
  onAddToCart,
  ...props
}) {
  const [piece, setPiece] = useState(0)
  const [pieceNumberState, setPieceNumberState] = useState(pieceNumber)
  return (
    <Wrapper {...props}>
      <BackgroundImage src={backgroundImg} alt="wheel background"></BackgroundImage>
      <TitleSection>
        <Brand>
          <h6>{title}</h6>
          <p>{subtitle}</p>
        </Brand>
        {summer ? (
          <Weather>
            <SummerIcon />
            <p>summer</p>
          </Weather>
        ) : (
          <Weather>
            <WinterIcon />
            <p>winter</p>
          </Weather>
        )}
      </TitleSection>
      <FeatureSection>
        <Features>
          <p>{type}</p>
          <More>
            <p>{number}</p>
            <p>{letter}</p>
            <InfoIcon />
          </More>
        </Features>
        <AbleContainer>
          <Able color="blue">
            <FuelIcon />
            {fuel}
          </Able>
          <Able color="orange">
            <RainIcon />
            {rain}
          </Able>
          <Able color="hardDark">
            <SoundIcon />
            {sound}
          </Able>
        </AbleContainer>
      </FeatureSection>
      <div>
        <Old>{oldPrice && `${twoDecimals(oldPrice)} LEI`}</Old>
        <New>{`${twoDecimals(newPrice)} LEI`}</New>
      </div>
      <BuySection>
        {pieceNumber ? <Available>Available</Available> : <Unavailable>Unavailable</Unavailable>}
        <StyledButton
          onClick={() => {
            onAddToCart(piece)
            setPieceNumberState((state) => state - piece)
            setPiece(0)
          }}
        >
          <StyledSelect
            name="piece"
            onClick={(e) => e.stopPropagation()}
            value={piece}
            onChange={(e) => setPiece(e.target.value)}
          >
            {range(0, pieceNumberState).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </StyledSelect>
          <CartIcon />
          <span>Ad to cart</span>
        </StyledButton>
      </BuySection>
    </Wrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summer: PropTypes.bool,
  type: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  rain: PropTypes.string.isRequired,
  sound: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number.isRequired,
  pieceNumber: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  id: PropTypes.string || PropTypes.number,
}

export default Card
