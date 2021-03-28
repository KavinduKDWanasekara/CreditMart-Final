

import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import ContractPage from './pages/ContractPage';
import ContractPage1 from './pages/ContractPage-1';
import MyProfileNew from './pages/MyProfileNew';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ExplorePage from "./pages/ExplorePage";
import ProfileAddInfo from "./components/Cards/ProfileAddInfo";

import Login from "./components/auth/Login";
import Logout from "./components/auth/logout";
import Register from "./components/auth/Register";
import './index.css';
import CardCompanyDetails from "./components/Cards/CardCompanyDetails";
import CardsIndividualExplore from "./components/Cards/CardsIndividualExplore";

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={MyProfileNew} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profileInd" component={CardsIndividualExplore} />
          <Route path="/contract" component={ContractPage1} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/profileaddinfo" component={ProfileAddInfo} />
          <Route path="/editinfo" component={CardCompanyDetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
