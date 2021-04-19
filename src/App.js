import './App.css';
import Profile from './components/authentication/Profile';
import Register from './components/authentication/Register';
import Signin from './components/authentication/Signin';
import ForgotPassword from './components/authentication/ForgotPassword';
import UpdateProfile from './components/authentication/UpdateProfile'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/authentication/PrivateRoute';
import Dashboard from './components/photos/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Signin} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;