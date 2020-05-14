import React, { useContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import API from '../../utils/API'
import { COLORS, FONT_FAMILY, mobileAndUp, tabletAndUp, laptopAndUp, desktopAndUp } from '../../utils/theme'

import Button from '../Button'
import Form from '../Form'
import { SearchField } from '../Form/fields/TextField'
import Dropdown from '../Dropdown'
import { Table, Row } from '../Dropdown/CartList'
import CartList from '../Dropdown/CartList'
import Loading from '../Loading'
import CartContext from '../../context/cartContext'
import useClickOutside from '../../hooks/useClickOutside'

const StyledHeader = styled.header`
  background: ${COLORS.white};
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${laptopAndUp()} {
    flex-wrap: nowrap;
    height: 52px;
  }
`

const HeaderPart = styled.div`
  display: flex;
  width: 100%;

  min-height: 40px;
  flex-wrap: wrap;
  justify-content: center;
  ${mobileAndUp()} {
    justify-content: space-between;
  }
  ${laptopAndUp()} {
    width: auto;
    height: 100%;
  }
`

const Logo = styled.img`
  width: 40px;
`

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  width: 100%;
  margin: 10px 0;
  ${mobileAndUp()} {
    width: auto;
    margin: 2px 0 2px 50px;
  }
  ${desktopAndUp()} {
    width: 550px;
  }
`

const StyledTextField = styled(SearchField)`
  border-radius: 3px 0 0 3px;
  box-shadow: 0px 0px 4px 0px rgba(43, 48, 61, 0.3) inset;
  height: 100%;
  font-size: 1.2rem;
  font-family: ${FONT_FAMILY.roboto};
  border: 0;
  padding: 10px 20px;
  font-style: italic;
  color: #8a9098;
  ${tabletAndUp()} {
    padding: 10px 30px;
  }
`

const SearchButton = styled(Button)`
  border-radius: 0 3px 3px 0;
  height: 100%;
  border: 0;
  padding: 10px 10px;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: ${FONT_FAMILY.roboto};
  font-weight: bold;
  cursor: pointer;
  ${mobileAndUp()} {
    padding: 10px 20px;
  }
  ${tabletAndUp()} {
    padding: 10px 35px 10px 35px;
  }
`

const StyledDropdown = styled(Dropdown)`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  ${mobileAndUp()} {
    width: auto;
    justify-content: initial;
  }
  ${laptopAndUp()} {
    margin: 0 0 0 40px;
  }
`

const StyledCartList = styled(CartList)`
  right: -20px;
  top: 100%;
`

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 100%;
  transform: translateY(15px);
  color: ${COLORS.black};
  z-index: 1;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.13);
  border-radius: 3px;
  max-height: 200px;
  overflow: auto;
`

function Header({ logo, ...props }) {
  const { cart } = useContext(CartContext)
  const [serachList, setSearchList] = useState([])
  const [loading, setLoading] = useState(false)

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const ref = useRef()
  useClickOutside(ref, toggle)

  function toggle() {
    if (menuIsVisible) {
      setSearchList([])
    }
    setMenuIsVisible(!menuIsVisible)
  }

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
              <SearchButton
                type="submit"
                onClick={(e) => {
                  if (menuIsVisible) {
                    e.preventDefault()
                  }
                  toggle()
                }}
              >
                Search
              </SearchButton>
              {menuIsVisible && (
                <DropdownList ref={ref} onClick={(e) => e.stopPropagation()}>
                  {loading ? (
                    <Loading />
                  ) : serachList.length ? (
                    <Table>
                      <tbody>
                        {serachList.map((result) => (
                          <Row key={result.id}>
                            <td>
                              <div>
                                {`${result.brand} - `}
                                <span>{result.category}</span>
                              </div>
                              <div>
                                <span>{result.type}</span>
                              </div>
                            </td>
                          </Row>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <div>Nothing</div>
                  )}
                </DropdownList>
              )}
            </>
          )}
        </StyledForm>
      </HeaderPart>
      <HeaderPart>
        <StyledDropdown text="My account">My account content</StyledDropdown>
        <StyledDropdown text="Favourites">Favourites content</StyledDropdown>
        <StyledDropdown text="Cart">
          <StyledCartList
            products={cart.map((product) => ({
              id: product.id,
              title: product.brand,
              subtitle: product.category,
              type: product.type,
              price: product.newPrice,
              piece: product.amount,
            }))}
          />
        </StyledDropdown>
      </HeaderPart>
    </StyledHeader>
  )

  async function handleSearch({ search } = { search: '' }) {
    setLoading(true)
    try {
      const resp = await API.product.get({ search })
      setSearchList([].concat.apply([], Object.values(resp)))
    } catch (e) {
      alert(e.message)
    }
    setLoading(false)
  }
}

Header.propTypes = {
  logo: PropTypes.string,
}

export default Header
