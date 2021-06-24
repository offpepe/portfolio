import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';
import About from './pages/About';
import Header from './components/Header';
import Projects from './pages/Projects'
import ProjectDetails from './components/ProjectDetails';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
  <>
   <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/portfolio" component={ PageLanding }/> 
      <Route exact path="/portfolio/about" component={ About }/> 
      <Route exact path="/portfolio/projects" component={ Projects }/> 
      <Route exact path="/portfolio/projects/:name" component = { ProjectDetails } />
      <Route exact path="/portfolio/contact" component = { Contact } />
    </Switch>
   </BrowserRouter>
  </>
  );
}

export default App;
