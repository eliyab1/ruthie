import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from "./Header"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import FAQs from "./FAQs"
import Resources from './Resources';
import AboutMe from './AboutMe';
import IndividualTherapy from './IndividualTherapy';
import MaternalHealth from './MaternalHealth';
import CurriculumDev from './CurriculumDev';
import GroupTherapy from './GroupTherapy';
import PlantMedicine from './PlantMedicine';
export default function App() {
  return <>
    <Router>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/services"> <Services /> </Route> 
      <Route path="/faqs"> <FAQs /> </Route>
      <Route path="/resources"> <Resources /> </Route>
      <Route path="/aboutme"> <AboutMe /> </Route>
      <Route path="/contact"> <Contact /> </Route>
      <Route path="/services/individual"> <IndividualTherapy /> </Route>
      <Route path="/services/maternalhealth"> <MaternalHealth /> </Route>
      <Route path="/services/curriculumdev"> <CurriculumDev /> </Route>
      <Route path="/services/grouptherapy"> <GroupTherapy /></Route>
      <Route path="/services/plantmedicine"> <PlantMedicine /></Route>
    </Switch>
    </Router>
  </>
}