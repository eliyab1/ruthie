// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Construction from './Construction'
import Header from "./Header"
import NavBar from './NavBar'
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Resources from './Resources';
import AboutMe from './AboutMe';
import IndividualTherapy from './IndividualTherapy';
import PostpartumParents from './PostpartumParents';
import CurriculumDev from './CurriculumDev';
import GroupTherapy from './GroupTherapy';
import Footer from './Footer';
export default function App() {
  return <>
    <Router>
    <div className="page-wrap">
    <Construction />
    <div className="dude">
    <Header />
    </div>
    <NavBar />
    
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/services"> <Services /> </Route> 
      <Route path="/faq"> <FAQ /> </Route>
      <Route path="/resources"> <Resources /> </Route>
      <Route path="/aboutme"> <AboutMe /> </Route>
      <Route path="/contact"> <Contact /> </Route>
      <Route path="/services/individual"> <IndividualTherapy /> </Route>
      <Route path="/services/postpartumparents"> <PostpartumParents /> </Route>
      <Route path="/services/curriculumdev"> <CurriculumDev /> </Route>
      <Route path="/services/grouptherapy"> <GroupTherapy /></Route>
    </Switch>
    </div>
    <Footer />
    </Router>
  </>
}