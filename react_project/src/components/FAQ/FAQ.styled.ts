import styled from 'styled-components';

export const StyledFAQ = styled.div`
  padding: 40px 40.05px 38px 40.05px;
  width: 896px;

  background-color: var(--white-color);

  p {
    color: #939191;
    font-size: var(--paragraph-med);
    margin-top: 16px;
    margin-right: 154.17px;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Open = styled.div`
  width: 51.08px;
  height: 48px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    border: 1px solid #ffffff;
    width: 17.03px;
    border-radius: 4px;
  }
`;

export const Closed = styled.div`
  width: 51.08px;
  height: 48px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span:nth-child(1) {
    border: 1px solid #ffffff;
    transform: rotate(-90deg);
    width: 16px;
    border-radius: 4px;
  }
  span:nth-child(2) {
    border: 1px solid #ffffff;
    width: 17.03px;
    position: absolute;
    border-radius: 4px;
  }
`;
