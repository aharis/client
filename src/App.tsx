import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      {/* <ToastContainer /> */}
      </Provider>
    </>
  );
}

export default App;
