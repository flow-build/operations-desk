import styled from 'styled-components';
import { colors } from '../../../../styles';
import { LogoutIcon } from '../../../../assets';

export const Container = styled.header`
  grid-area: ${(props) => props.gridArea};
  background-color: ${colors.Gray_100};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logout = styled(LogoutIcon)`
  width: 1.6rem;
  height: 1.6rem;
`;
