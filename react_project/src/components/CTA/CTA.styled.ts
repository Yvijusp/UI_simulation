import styled from 'styled-components';

export const StyledCTA = styled.section`
  position: relative;
  max-height: 502px;

  display: flex;
`;

export const CTACard = styled.div`
  background-color: var(--primary-color);
  color: var(--white-color);
  position: absolute;
  z-index: 1;

  height: 502px;
  width: 729px;

  padding: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  left: 318px;

  button {
    margin-top: 48px;
    width: fit-content;
  }
`;
