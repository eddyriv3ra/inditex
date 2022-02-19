import Header from 'components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>main page</div>} />
        <Route path="/about" element={<div>Page Description</div>} />
      </Routes>
    </div>
  );
};

export default App;
