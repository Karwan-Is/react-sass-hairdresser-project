import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/booking' component={Booking} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
