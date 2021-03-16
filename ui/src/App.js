
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";


import ContractPage from './pages/ContractPage';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ExplorePage from "./pages/ExplorePage";
import ProfileAddInfo from "./components/Cards/ProfileAddInfo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import './index.css';
import CardCompanyDetails from "./components/Cards/CardCompanyDetails";

function App() {

  return (
    <div className="App">
     

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
          <Route path="/profileaddinfo" component={ProfileAddInfo} />
          <Route path="/editinfo" component={CardCompanyDetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
