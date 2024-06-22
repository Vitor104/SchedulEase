import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import Root from '../root/root'
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contato, setContato] = useState();
  const [divs, setDivs] = useState([]);
  const [option, setOption] = useState([]);
  

  const submitForm = (e) => {
    e.preventDefault();

    
      setDivs([...divs, <div className='newDiv' key={divs.length}>
        {name}<br></br> 
        {email}<br></br>
        {contato}       
        {divs.length + 1} 
        </div>]);    

    setOption([...option, <option className={styles.newOption} key={option.length}>
      {name}<br></br> 
      {email}<br></br>
      {contato}       
      {option.length + 1}  
  </option>]);  
    }
      


    

    

  return (
    <BrowserRouter>
    <div className='appContainer'>
      <header>
        <nav className='nav'>
          <NavLink className='textNav' to='/'>Home</NavLink>
          <NavLink className='textNav' to='Contact'>Contacts</NavLink>
          <NavLink className='textNav' to='Appointment'>Appointments</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Root />} />

          <Route path='Contact' element={ <Contact setName={setName} setEmail={setEmail} setContato={setContato}  submitForm={submitForm}  divs={divs} />}/>

          <Route path='Appointment' element={ <Appointment option={option} />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

