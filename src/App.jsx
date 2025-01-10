import { Route, Routes } from 'react-router-dom';  // Router'ı kaldırdık
import './App.css';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import OrderConfirm from './pages/OrderConfirm';

function App() {
  return (
    <Routes> {/* Sadece Routes ve Route kullanıyoruz */}
      <Route path="/" element={<MainPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/success" element={<OrderConfirm />} />
    </Routes>
  );
}

export default App;
