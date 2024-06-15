import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import Root from '../root/root';
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





function App() {

  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log({name, sobrenome, email, contato});
    const dados = {
      nome: name,
      sobrenome: sobrenome,
      email: email,
      contato: contato
    }
  }

  let dadosContact = submitForm.dados;

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
          <Route path='Contact' element={ <Contact setName={setName} setSobrenome={setSobrenome} setEmail={setEmail} setContato={setContato} submitForm={submitForm} name={name} />} />
          <Route path='Appointment' element={ <Appointment />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
