import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.main`
  grid-area: ${(props) => props.gridArea};
  background-color: ${colors.Gray};

  overflow: auto;

  padding: 1rem;
`;

export const Pane = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;

  padding: 1rem;

  background-color: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
