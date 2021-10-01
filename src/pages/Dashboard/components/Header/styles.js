import styled from 'styled-components';
import { colors } from '../../../../styles';
import { LogoutIcon } from '../../../../assets';

export const Container = styled.header`
  grid-area: ${(props) => props.gridArea};
  background-color: ${colors.Gray_100};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuItems = styled.span`
  cursor: pointer;
`;

export const Logout = styled(LogoutIcon)`
  width: 1.6rem;
  height: 1.6rem;
`;
