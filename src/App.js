import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Info from './containers/Info'
import Cuisine from './containers/Cuisine'
import Menu from './containers/Menu/index'
import Items from './containers/Items'
import ConfirmModal from './containers/Confirm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

function App() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Header />
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/cuisine">
          <Cuisine />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/confirm">
          <ConfirmModal />
        </Route>
        <Route path="/">
          <Redirect to="/info" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
