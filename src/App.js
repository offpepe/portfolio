import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';
import ProjectCarrousel from './pages/ProjectsCarrousel';
import './App.css';
import Contact from './pages/Contact';

function App() {
  return (
  <>
   <BrowserRouter>
    <Switch>
      <Route exact path="/portfolio" component={ PageLanding }/>
      <Route exact path="/portfolio/projects" component={ ProjectCarrousel }/> 
      <Route exact path="/portfolio/contact" component={ Contact }/> 
    </Switch>
   </BrowserRouter>
  </>
  
  );
}

export default App;
