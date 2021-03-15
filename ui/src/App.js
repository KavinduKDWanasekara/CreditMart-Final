// import './App.css';
// import WelcomePage from './pages/WelcomePage';
// import ContractPage from './pages/ContractPage';



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
      {/* <Register/> */}
      {/* <ContractPage/> */}
      {/* <ContractPage/> */}
{/* < AboutUs /> */}
{/* <ProfilePage /> */}

    {/* <Dashboard/> */}

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/about" component={AboutUs} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contract" component={ContractPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
