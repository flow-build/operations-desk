import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.Primary_100};
  opacity: 0.8;

  & > * {
    width: 70px;
    height: 70px;
  }
`;
