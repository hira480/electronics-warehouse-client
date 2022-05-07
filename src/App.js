import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
