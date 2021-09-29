import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.footer`
  grid-area: ${(props) => props.gridArea};

  background-color: ${colors.Primary};
`;
