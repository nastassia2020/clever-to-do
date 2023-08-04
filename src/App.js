import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
import ProtectedRoute from './utils/ProtectedRoute';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ErrorBoundary className="error">
        <Suspense fallback={<h1> ...</h1>}>
          <div className="app-content">
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Main />} exact />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
