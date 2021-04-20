

import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import ProfileCompany from './pages/ProfilePageCompanies';
import ContractPage from './pages/ContractPage';

import MyProfileNew from './pages/MyProfileNew';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ExplorePage from "./pages/ExplorePage";
import ProfileAddInfo from "./components/Cards/ProfileAddInfo";
import Error from "./pages/404Error";
import Login from "./components/auth/Login";
import Logout from "./components/auth/logout";
import Register from "./components/auth/Register";
import './index.css';
import CardCompanyDetails from "./components/Cards/CardCompanyDetails";

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={MyProfileNew} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/companies" component={ProfileCompany} />
          <Route path="/contract" component={ContractPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/profileaddinfo" component={ProfileAddInfo} />
          <Route path="/editinfo" component={CardCompanyDetails} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
