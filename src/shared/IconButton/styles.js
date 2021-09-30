import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.button`
  background-color: ${(props) =>
    props.outline ? 'transparent' : `${colors.Primary}`};

  border: ${(props) =>
    props.outline ? `1px solid ${colors.Primary}` : 'none'};

  padding: 0.5rem;
  font-size: 0;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.outline ? `${colors.Primary_800}` : `${colors.Primary_300}`};
  }

  &:hover > * {
    color: #fff;
  }
`;
