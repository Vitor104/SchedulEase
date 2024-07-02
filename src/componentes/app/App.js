import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import Root from '../root/root'
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";
import {v4 as uuidv4} from 'uuid';





function App() {

  /* CONTACTS */ 
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contato, setContato] = useState([]);
  const [divs, setDivs] = useState([]);
  
  /* APPOINTMENTS */ 
  const [description, setDescription] = useState();
  const [option, setOption] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [title, setTitle] = useState();
  const [divsAptm, setDivsAptm] = useState([]);
  
 /* CONTACTS */

  const submitForm = (e) => {
    e.preventDefault();

    const newContact = {name: name, email: email, contato: contato};

    setDivs(c => [...c, newContact]);

    setOption(o => [...o, newContact])

    

  }  

     const handleNameChange = (event) => {
      setName(event.target.value);
     }

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handleContatoChange = (event) => {
        setContato(event.target.value);
      }

      /* APPOINTMENTS */

      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      }

      const handleDateChange = (event) => {
        setDate(event.target.value);
      }

      const handleTimeChange = (event) => {
        setTime(event.target.value);
      }

      const handleTitleChange = (event) => {
        setTitle(event.target.value);
      }


   const submitAptm = (e) => {
    const newAppointment = {title: title, contact: [option.name], tdescription: description, date: date, time: time};

    setDivsAptm(n => [...n, newAppointment]);

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

          <Route path='Contact' element={ 
            <Contact 
            submitForm={submitForm} 
            handleNameChange={handleNameChange} 
            handleEmailChange={handleEmailChange} 
            handleContatoChange={handleContatoChange} 
            divs={divs.map((element) => <div className='newDiv' key={uuidv4()}>
            {element.name} <br></br>
            {element.email} <br></br>
            {element.contato}
            </div>)} />}/>

          <Route path='Appointment' element={ 
              <Appointment 
                option={option.map((e) => 
                  <option key={uuidv4()}>
                  {e.name} | {e.email} | {e.contato}
                  </option>)}
                handleDateChange={handleDateChange} 
                handleTimeChange={handleTimeChange} 
                handleTitleChange={handleTitleChange}
                handleDescriptionChange={handleDescriptionChange} 
                submitAptm={submitAptm}
                divsAptm={divsAptm.map((e) => <div className='newDiv' key={uuidv4()}>
                {e.title} <br></br>
                {e.contact}<br></br>
                {e.description} <br></br>
                {e.date} <br></br>
                {e.time} 
                </div>)} />}/>
            
              
            
      
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

// description={description}
               // date={date}
              // time={time}
               // titleAptm={title}