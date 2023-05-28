import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
// import Hello from './components/Hello';
import Footer from './components/Footer';
function App() {
 
  const [name, setName] = useState("hero")
  return (
    <div>
      <Header name = {name} setName={setName}/>
      <Footer name = {name}/>
   
    </div>
  );
}

export default App;
