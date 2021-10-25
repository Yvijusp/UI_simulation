import styled from 'styled-components';

export const Eclipse = styled.div`
  color: var(--white-color);

  width: 72px;
  height: 72px;

  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--secondary-color);

  div {
    position: absolute;
    background: rgba(255, 255, 255, 0.24);
    width: 42px;
    height: 42px;
    border-radius: 50%;

    bottom: -24px;
  }
`;

export const StyledStep = styled.div`
  max-width: 450px;
  height: 165px;
  position: relative;

  display: flex;
  gap: 24px;
`;

export const DottedLine = styled.div`
  border: 2px dashed var(--primary-color);
  height: 71px;
  position: absolute;
  top: 80px;
  left: 35px;
`;

export const StepBody = styled.div`
  margin-top: 8px;

  p {
    margin-top: 8px;
    color: var(--black-color);
    opacity: 0.6;
    font-size: var(--paragraph-med);
    font-weight: 600;
    line-height: 175%;
  }
`;
