import OverlayCard from './components/Cards/OverlayCards';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <OverlayCard
        body='We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes'
        title='Serve our customers and always deliver the customer service'
        color='primary'
      />
    </div>
  );
}

export default App;
