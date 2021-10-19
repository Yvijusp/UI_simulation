import Strip from './components/Strip/Strip';
import { GlobalStyle, Title02 } from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Strip circle>
        <Title02>Quick Service</Title02>
      </Strip>
      <Strip rating={4.5}></Strip>
    </div>
  );
}

export default App;
