import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import CastList from './CastList';
import Footer from './Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import CastDetails from './CastDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={CastList}/>
      <Route path="/details/:id" component={CastDetails} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;