import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import CastList from './CastList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CastList />
      <Footer />
    </div>
  );
}

export default App;