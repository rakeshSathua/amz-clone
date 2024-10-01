import Image from "next/image";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.navBg};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px 15px;
  z-index: 1000;
`;

export const Logo = styled(Image)`
  margin: 0 20px;
  height: 50px;
  cursor: pointer;
  object-fit: contain;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const SearchInput = styled.input`
  display: flex;
  height: 22px;
  width: 100%;
  border: none;
  padding: 10px;
`;

export const SearchIconButton = styled(SearchIcon)`
  background-color: #febd68;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

export const OptionTopLine = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const OptionBottomLine = styled.span`
  font-size: 13px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketCounter = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
`;

export const SignInLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;
