import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import ProductDetail from 'pages/ProductDetail';
import Home from 'pages/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
