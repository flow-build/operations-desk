import styled from 'styled-components';

/* 
  - HE: Header
  - SL: SideList
  - CT: Content
  - FT: Footer
*/
export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 2.8fr;
  grid-template-rows: 80px auto 30px;
  grid-template-areas:
    'HE HE'
    'SL CT'
    'FT FT';
`;
