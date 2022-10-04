import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import PasswordReset from './components/reset/PasswordReset';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
            <Route path='/reset/:key' element={<PasswordReset/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

root.render(
  <App/>
);