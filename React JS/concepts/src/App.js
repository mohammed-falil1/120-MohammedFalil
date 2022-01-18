import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn/>}/>
      <Route exact path="/home" element={<HomePage/>}/>
    </Routes>
  );
}


