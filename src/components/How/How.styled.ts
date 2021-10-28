import styled from 'styled-components';

interface Props {
  image?: string;
}

export const Circle = styled.span`
  background-color: var(--mint-color);
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 50%;
`;

export const StyledHow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 515px;
  height: 77px;
  align-items: flex-start;

  h4 {
    margin-top: 5px;
  }
`;

export const StyledHowImage = styled.div`
  background: ${({ image }: Props) => image && `url(${image})`};
  background-repeat: no-repeat;

  width: 304px;
  height: 477px;
`;
