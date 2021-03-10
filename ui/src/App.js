// import './App.css';

import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import ContractPage from './pages/ContractPage';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ExplorePage from "./pages/ExplorePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {

  return (
    <div className="App">
      {/* <h1>HEllo</h1> */}
      {/* <WelcomePage/> */}
      {/* <ContractPage/> */}
{/* < AboutUs /> */}
{/* <ProfilePage /> */}

    {/* <Dashboard/> */}

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={MyProfile} />
          <Route path="/About" component={AboutUs} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Contract" component={ContractPage} />
          <Route path="/Explore" component={ExplorePage} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
