import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
// import Hello from './components/Hello';
import Footer from './components/Footer';
import Title from './components/Title';
function App() {
 
  const [name, setName] = useState("hero")
  const[showtitlepage, setshowtitlepage] = useState(true)
  return (
    <div>
      <Header name = {name} setName = {setName} showtitlepage = {showtitlepage} setshowtitlepage={setshowtitlepage}/>
      {/* <Header name = {name} setName={setName}/>
      <Footer name = {name}/> */}
   
    </div>
  );
}

export default App;
