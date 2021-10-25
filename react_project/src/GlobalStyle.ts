import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;

}

h1 {
  font-size: 64px;
  font-weight: 800;
  line-height: 84px;
letter-spacing: -0.03em;
}

h2 {
  font-size: 58px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 76px;
}

h3 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.03em;

}

h4 {
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.03em;
}


h5 {
  font-size: 32px;
  font-weight: 700;
}

h6 {
  font-size: 20px;
  font-weight: 600;
}

:root{
  --paragraph-med: 18px;
  --paragraph-sm: 16px;
  --caption: 12px;
  --title-01-size: 32px;
  --title-01-weight: 700;
  --title-02-size: 24px;
  --title-02-weight: 600;
  --black-color: #1E1B1B;
  --primary-color: #FF6433;
  --secondary-color: #661ce7;
  --mint-color: #00D289;
  --steelgrey-color: #E2E6E9;
  --lightgrey-color: #F2F2F2;
  --white-color: #FFFFFF;
}

  img {
    width: 100%;
  }
`;

export const Title01 = styled.h4`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 48px;
`;
export const Title02 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 36px;
`;

export const Caption = styled.span`
  font-size: var(--caption);
  opacity: 0.7;
  font-weight: 500;
`;

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;
