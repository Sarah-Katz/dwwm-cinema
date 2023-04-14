import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './router/Router'
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
