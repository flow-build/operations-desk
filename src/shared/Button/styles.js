import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.button`
  background-color: ${(props) =>
    props.outline ? 'transparent' : `${colors.Primary}`};

  border: ${(props) =>
    props.outline ? `1px solid ${colors.Primary}` : 'none'};

  color: ${(props) =>
    props.outline ? `${colors.Primary}` : `${colors.Gray_100}`};

  padding: 0.5rem 1rem;

  cursor: pointer;
  font-size: 0.8rem;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.outline ? `${colors.Primary_800}` : `${colors.Primary_300}`};

    color: ${colors.Gray_100};
  }
`;
