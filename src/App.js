
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MyClasses from './Components/MyClasses/MyClasses';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/myclasses' element={<MyClasses/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
