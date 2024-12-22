import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={<h1 className="text-center text-5xl">Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}
