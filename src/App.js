import './App.css';
import NavBar from './NavBar';
import Header from "./Header"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import FAQs from "./FAQs"
import Resources from './Resources';
import AboutMe from './AboutMe';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import IndividualTherapy from './IndividualTherapy';
import MaternalHealth from './MaternalHealth';
import CurriculumDev from './CurriculumDev';
import GroupTherapy from './GroupTherapy';
import PlantMedicine from './PlantMedicine';
export default function App() {
  const {Tabs, home, services, aboutMe, faqs, resources, contact} = NavBar()
  return <>
    <Router>
    <Header />
    {Tabs()}
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/services"> <Services /> </Route> 
      <Route path="/faqs"> <FAQs /> </Route>
      <Route path="/resources"> <Resources /> </Route>
      <Route path="/aboutme"> <AboutMe /> </Route>
      <Route path="/contact"> <Contact /> </Route>
      <Route path="/individual"> <IndividualTherapy /> </Route>
      <Route path="/maternalhealth"> <MaternalHealth /> </Route>
      <Route path="/curriculumdev"> <CurriculumDev /> </Route>
      <Route path="/grouptherapy"> <GroupTherapy /></Route>
      <Route path="/plantmedicine"> <PlantMedicine /></Route>
    </Switch>
    </Router>
  </>
}