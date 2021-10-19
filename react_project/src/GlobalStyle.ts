import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Manrope';
}

h1 {
  font-size: 64px;
  font-weight: 800;
}

h2 {
  font-size: 58px;
  font-weight: 800;
}

h3 {
  font-size: 48px;
  font-weight: 700;
}

h4 {
  font-size: 40px;
  font-weight: 700;
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

`;
