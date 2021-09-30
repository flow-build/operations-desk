import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.aside`
  grid-area: ${(props) => props.gridArea};
  background-color: ${colors.Gray_300};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  overflow-y: auto;
`;
