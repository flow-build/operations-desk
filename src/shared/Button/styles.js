import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.button`
  background-color: ${colors.Primary};
  color: white;
  padding: 0.5rem 1rem;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.Primary_400};
  }
`;
