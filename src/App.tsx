import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddBook from './pages/books/AddBook';
import AddPromotion from './pages/promotions/AddPromotion';


function App() {
  return (
    <div>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/add-promotion' element={<AddPromotion />} />


      </Routes>
      </Provider>
    </div>
  );
}

export default App;
