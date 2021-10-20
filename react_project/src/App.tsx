import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route path='/services/:id' component={ServicePage} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/contacts' component={Contact} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/blog/:id' component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
