import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';
import About from './pages/About'
import Header from './components/Header'

function App() {
  return (
  <>
   <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={ PageLanding }/> 
      <Route exact path="/about" component={ About }/> 
    </Switch>
   </BrowserRouter>
  </>
  );
}

export default App;
