import styled from 'styled-components';

export const StyledFeature = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  height: 47px;
  width: 47px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: #ffffff;

  svg {
    height: 28px;
    width: 28px;
  }
`;

export const Body = styled.div`
  h4 {
    font-size: var(--title-02-size);
    font-weight: var(--title-02-weight);
    margin-bottom: 8px;
  }

  p {
    font-size: var(--paragraph-sm);
    font-weight: 600;
    color: var(--black-color);
    opacity: 0.6;
  }
`;
