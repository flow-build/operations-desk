import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.footer`
  grid-area: ${(props) => props.gridArea};

  background-color: ${colors.Primary};
  color: ${colors.Gray_100};

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 1rem;

  font: 200 0.8rem Poppins;

  & > :last-child:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
