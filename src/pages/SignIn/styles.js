import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font: 600 1rem Poppins;
`;

export const Text = styled.p`
  font: 400 0.8rem Poppins;
`;

export const LoginContainer = styled.div`
  background-color: white;
  padding: 2rem 4rem;
  border-top: 4px solid blue;
  border-radius: 0.2rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
