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
  const [description, setDescription] = useState();
  const [divs, setDivs] = useState([]);
  const [option, setOption] = useState([]);
  const [divsAptm, setDivsAptm] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  

  const submitForm = (e) => {
    e.preventDefault();

    //setContacts([...contacts, {
  //    name: name,
  //    email: email,
  //    contato: contato
 //  }])

    
    setDivs([...divs, <div className='newDiv' key={divs.length}>
        {name}<br></br> 
        {email}<br></br>
        {contato}       
        {divs.length + 1} 
        </div>]);    

      setOption([...option, <option className={styles.newOption} key={option.length}>
      {contato}       
      {option.length + 1}  

  </option>]);  
  }
      const submitAptm = (e) => {
        e.preventDefault();
        setDivsAptm([...divsAptm, <div className='newDiv' key={divs.length}>
          {name}<br></br> 
          {email}<br></br>
          {contato}<br></br>
          {description}<br></br>
          {time}<br></br>
          {date}       
           
          </div>]);    
  
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

          <Route path='Contact' element={ <Contact divs={divs} setName={setName} setEmail={setEmail} setContato={setContato} submitForm={submitForm}   />}/>

          <Route path='Appointment' element={ <Appointment setDescription={setDescription} submit={submitAptm} option={option} divsAptm={divsAptm} setDate={setDate} setTime={setTime} />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

//divs={divs}

//{name}<br></br> 
//{email}<br></br>