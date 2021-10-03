import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div``;

export const Label = styled.label`
  font-size: 0.8rem;
`;

export const Input = styled.input`
  border: 0.5px solid ${colors.Primary};
  border-radius: 1.6px;

  background-color: ${colors.Gray_200};

  width: 100%;
  padding: 0.5rem;

  font-weight: 400;
  font-size: 0.8rem;
`;
