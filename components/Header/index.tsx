import React from 'react'
import { Basket, BasketCounter, CheckoutLink, Logo, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchIconButton, SearchInput, SignInLink } from './styled'
import Link from 'next/link';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { useAppSelector } from '@/lib/store/hooks';
import { selectUser, signOutToAccount } from '@/lib/store/reducers/userReducer';
import { auth } from '@/lib/firebase';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { selectCartItemsCount } from '@/lib/store/reducers/cartReducer';


const Header = () => {
  
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const cartItemLength = useAppSelector(selectCartItemsCount);
  
  const router = useRouter();
  
  console.log("USER : >> ", user);

  const handleSignIn = () => {
    if (user !== null) {
      auth.signOut();
      dispatch(signOutToAccount());
    } else {
      router.push("/login");
    }
  }
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
            Hello {user?.email}
          </OptionTopLine>

          <OptionBottomLine onClick={handleSignIn}>
            {user !== null ? "SIGN OUT" : "Sign In"}
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
          <BasketCounter>{cartItemLength}</BasketCounter>
        </Basket>
      </CheckoutLink>
    </Nav>

  )
}

export default Header