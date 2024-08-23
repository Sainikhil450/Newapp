import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'; // Import Footer component
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import AboutUs from './Components/AboutUs';
import Submit from './Components/Submit';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/about-us" element={<ProtectedRoute element={<AboutUs />} />} />
          <Route path="/submit" element={<ProtectedRoute element={<Submit />} />} />
        
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer /> {/* The Footer is displayed on all routes */}
      </Router>
    </AuthProvider>
  );
}

export default App;
