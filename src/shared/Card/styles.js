import styled from 'styled-components';
import { Close } from '@styled-icons/material';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Body = styled.div``;

export const Title = styled.h3`
  font-weight: 500;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
