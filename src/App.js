import './App.css';
import NavBar from './NavBar';
import Header from "./Header"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"
import FAQs from "./FAQs"
import Resources from './Resources';
import AboutMe from './AboutMe';
export default function App() {
  const {Tabs, home, services, aboutMe, faqs, resources, contact} = NavBar()
  return <>
    <Header />
    {Tabs()}
    {home && <Home />}
    {services && <Services />}
    {faqs && <FAQs />}
    {resources && <Resources />}
    {aboutMe && <AboutMe />}
    {contact && <Contact />}
  </>
}