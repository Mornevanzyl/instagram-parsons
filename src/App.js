import './App.css';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Signin from './components/Signin';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Signin} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;