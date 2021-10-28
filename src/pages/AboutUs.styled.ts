import styled from 'styled-components';
import { Title02 } from '../GlobalStyle';

const wrapper = {
  default: 'padding: 128px 0;',
  small: 'padding: 48px 0;',
  header: 'padding: 80px 0 128px 0;',
  bottom: 'padding: 0 0 128px 0',
};

export const HeaderWrapper = styled.section`
  ${wrapper.header}
`;

export const StepsWrapper = styled.section`
  ${wrapper.bottom}
`;

export const Steps = styled.section`
  display: flex;
`;

export const StepsLeft = styled.div`
  padding-right: 67px;

  h3 {
    margin-bottom: 16px;
  }

  ${Title02} {
    margin-bottom: 48px;
    color: #232536;
    opacity: 0.6;
  }
`;

export const StepsRight = styled.div`
  img {
    width: 573px;
  }
`;

export const ColorsWrapper = styled.section`
  display: flex;
`;

export const FeaturesWrapper = styled.section`
  ${wrapper.default}

  background: #F8F8F8;
`;

export const Features = styled.section`
  h2 {
    text-align: center;
    width: 861px;
    margin: 0 auto 64px auto;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 64px;
  border: 1px solid #ebebeb;
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
`;

export const FeaturesExperience = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamWrapper = styled.section`
  ${wrapper.default}
`;

export const Team = styled.section`
  h1 {
    text-align: center;
    margin-bottom: 66px;
  }
`;

export const TeamMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
