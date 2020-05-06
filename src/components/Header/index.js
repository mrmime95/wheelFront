import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'
import Form from '../Form'
import TextField from '../Form/fields/TextField'
import Dropdown from '../Dropdown'
import { COLORS, FONT_FAMILY } from '../../utils/theme'

//TODO: clear border;
const StyledHeader = styled.header`
  background: ${COLORS.white};
  width: 100%;
  height: 52px;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

const HeaderPart = styled.div`
  display: flex;
  height: 100%;
`

const Logo = styled.img`
  width: 40px;
`

const StyledForm = styled(Form)`
  display: flex;
  width: 550px;
  margin: 2px 0 2px 50px;
`

const StyledTextField = styled(TextField)`
  border-radius: 3px 0 0 3px;
  box-shadow: 0px 0px 4px 0px rgba(43, 48, 61, 0.3) inset;
  height: 100%;
  font-size: 1.6rem;
  font-family: ${FONT_FAMILY.roboto};
  border: 0;
  padding: 10px 30px;
  font-style: italic;
  color: #8a9098;
`
const SearchButton = styled(Button)`
  border-radius: 0 3px 3px 0;
  height: 100%;
  border: 0;
  padding: 10px 20px 10px 35px;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: ${FONT_FAMILY.roboto};
  font-weight: bold;
  cursor: pointer;
`

const StyledDropdown = styled(Dropdown)`
  margin: 0 0 0 40px;
  align-items: center;
  display: flex;
`

function Header({ logo, ...props }) {
  return (
    <StyledHeader {...props}>
      <HeaderPart>
        <Button to="/" variant="text">
          <Logo src={logo} />
        </Button>
        <StyledForm initialValues={{ search: '' }} onSubmit={handleSearch}>
          {() => (
            <>
              <StyledTextField name="search" placeholder="Search products" />
              <SearchButton type="submit">Search</SearchButton>
            </>
          )}
        </StyledForm>
      </HeaderPart>
      <HeaderPart>
        <StyledDropdown text="My account">My account content</StyledDropdown>
        <StyledDropdown text="Favourites">Favourites content</StyledDropdown>
        <StyledDropdown text="Cart">Cart content</StyledDropdown>
      </HeaderPart>
    </StyledHeader>
  )

  function handleSearch(value) {
    console.log(value)
  }
}

Header.propTypes = {
  logo: PropTypes.string,
}

export default Header
