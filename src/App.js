import './App.css';
import NavBar from './NavBar';
import Titles from "./Titles"
export default function App() {
  const {tabs, home, services, contact, aboutMe} = NavBar()
  return <>
    <Titles />
    {tabs()}
    {home && <h1>This is the Home Page</h1>}
    {services && <h1>This is the Services Page</h1>}
    {contact && <h1>This is the Contact Page</h1>}
    {aboutMe && <h1>This is the About Me Page</h1>}
    
  </>
}