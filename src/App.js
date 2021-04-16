import './App.css';
import Dashboard from './components/Dashboard'
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;