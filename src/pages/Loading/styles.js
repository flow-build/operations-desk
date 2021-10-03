import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.Primary_100};

  & > * {
    width: 70px;
    height: 70px;
  }
`;
