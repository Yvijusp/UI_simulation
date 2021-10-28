import styled from 'styled-components';

export const StyledTestimonial = styled.div`
  background-color: var(--white-color);
  padding: 72px;
  border: 1px solid rgba(172, 172, 172, 0.29);
  box-sizing: border-box;
  /* DE */

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  height: 376px;
  width: 616px;

  img {
    width: 64px;
  }
`;

export const Customer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  p {
    font-size: var(--paragraph-sm);
    font-weight: 600;
    color: #939191;
  }
`;

export const Line = styled.div`
  width: 32px;
  border: 2px solid #939191;

  &.active {
    border: 2px solid var(--primary-color);
  }
`;
