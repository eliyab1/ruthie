import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from "./Header"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Resources from './Resources';
import AboutMe from './AboutMe';
import IndividualTherapy from './IndividualTherapy';
import MaternalHealth from './MaternalHealth';
import CurriculumDev from './CurriculumDev';
import GroupTherapy from './GroupTherapy';
import Footer from './Footer';
export default function App() {
  return <>
    <Router>
    <div className="page-wrap">
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/services"> <Services /> </Route> 
      <Route path="/faq"> <FAQ /> </Route>
      <Route path="/resources"> <Resources /> </Route>
      <Route path="/aboutme"> <AboutMe /> </Route>
      <Route path="/contact"> <Contact /> </Route>
      <Route path="/services/individual"> <IndividualTherapy /> </Route>
      <Route path="/services/maternalhealth"> <MaternalHealth /> </Route>
      <Route path="/services/curriculumdev"> <CurriculumDev /> </Route>
      <Route path="/services/grouptherapy"> <GroupTherapy /></Route>
    </Switch>
    </div>
    <Footer />
    </Router>
  </>
}