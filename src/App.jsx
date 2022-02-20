import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
