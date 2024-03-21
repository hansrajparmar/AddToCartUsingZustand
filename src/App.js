import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
