import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';
import './App.css';

function App() {
  return (
  <>
   <BrowserRouter>
    <Switch>
      <Route exact path="/portfolio" component={ PageLanding }/> 
    </Switch>
   </BrowserRouter>
  </>
  
  );
}

export default App;
