import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Root from '../root/root';
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





function App() {

  const [name, setName] = useState([{}]);
  const [email, setEmail] = useState([{}]);
  const [contato, setContato] = useState([{}]);
  const [divs, setDivs] = useState([]);

  

  const submitForm = (e) => {
    e.preventDefault();
    setDivs([...divs, <div className='example' key={divs.length}>
       {name}<br></br> 
       {email}<br></br>
      {contato}{divs.length + 1} 
      </div>]);
    
    }
      
      
      
      


  

  useEffect(() => {
    localStorage.setItem('dados', JSON.stringify(divs));
  }, [divs])
  
  

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
          <Route path='Contact' element={ <Contact setName={setName} setEmail={setEmail} setContato={setContato}  submitForm={submitForm}  divs={divs} />}/>
          <Route path='Appointment' element={ <Appointment />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

//setName={setName} setEmail={setEmail} setContato={setContato} name={name}

//setDivs([...divs, <div className='example' key={divs.length}>
 // {name}<br></br> 
 // {email}<br></br>
 //{contato}{divs.length + 1} 
 //</div>]);
