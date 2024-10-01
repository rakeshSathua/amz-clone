import React from 'react'
import { Basket, BasketCounter, CheckoutLink, Logo, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchIconButton, SearchInput, SignInLink } from './styled'
import Link from 'next/link';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';


const Header = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          width={100}
          height={40}
        ></Logo>
      </Link>

      <SearchBox>
        <SearchInput type='text' />
        <SearchIconButton />
      </SearchBox>
      <SignInLink>
        <Option>
          <OptionTopLine>
            Hello
          </OptionTopLine>

          <OptionBottomLine>
            Sign IN
          </OptionBottomLine>
        </Option>
      </SignInLink>
      <Option>
        <OptionTopLine>
          Returns
        </OptionTopLine>

        <OptionBottomLine>
          & Orders
        </OptionBottomLine>
      </Option>

      <CheckoutLink href='/checkout'>
      <Basket>
        <ShoppingCartOutlined />
        <BasketCounter>0</BasketCounter>
      </Basket>
      </CheckoutLink>
    </Nav>

  )
}

export default Header