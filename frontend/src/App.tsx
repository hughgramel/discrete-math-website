import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TruthTable from './pages/TruthTable';
import './output.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/truth-table" element={<TruthTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
