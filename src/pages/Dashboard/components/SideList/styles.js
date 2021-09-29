import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.aside`
  grid-area: ${(props) => props.gridArea};
  background-color: ${colors.Gray_300};
`;
