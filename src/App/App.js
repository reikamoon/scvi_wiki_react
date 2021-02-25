import './App.css';
import Header from '../Header/Header';
import CastList from '../CastList/CastList';
import Footer from '../Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import CastDetails from '../CastDetails/CastDetails';
import ScrollToTopBtn from "../ScrolltoTop/ScrolltoTop";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={CastList}/>
      <Route path="/details/:id" component={CastDetails} />
      <ScrollToTopBtn />
      <Footer />
    </div>
    </Router>
  );
}

export default App;