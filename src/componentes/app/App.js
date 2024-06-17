import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import Root from '../root/root';
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





function App() {

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contato, setContato] = useState([]);
  const [divs, setDivs] = useState([]);


  const submitForm = (e) => {
    e.preventDefault();
    const dados = {
      nome: name,
      email: email,
      contato: contato
    }
    console.log(dados.nome);

    setDivs([...divs, <div key={divs.length}>{name}, {email}, {contato}{divs.length + 1}</div>]);
    console.log(divs);
  }

  

  return (
    <BrowserRouter>
    <div className='appContainer'>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='Contact'>Contacts</NavLink>
        <NavLink to='Appointment'>Appointments</NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Root />} />
          <Route path='Contact' element={ <Contact setName={setName} setEmail={setEmail} setContato={setContato} submitForm={submitForm} name={name} divs={divs} />}/>
          <Route path='Appointment' element={ <Appointment />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
