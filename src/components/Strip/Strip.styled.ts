import styled from 'styled-components';

export const StyledStrip = styled.div`
  border-radius: 59px;
  border: 12px solid rgba(225, 225, 225, 0.43);
  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);

  min-height: 102px;
  padding: 14px;

  width: fit-content;

  box-shadow: 0px 28px 118px 0px #6d6c731f;

  display: flex;

  align-items: center;
`;

export const Circle = styled.div`
  background-color: #5cba99;
  border-radius: 50%;
  width: 69.66px;
  height: 70px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--white-color);

    font-size: 24px;
    font-weight: 600;

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Body = styled.div``;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingBody = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 69.66px;
  height: 70px;
`;

export const RatingStars = styled.div`
  display: flex;

  svg {
    width: 36px;
    height: 36px;
  }
`;
