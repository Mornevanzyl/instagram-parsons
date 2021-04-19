import './App.css';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
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