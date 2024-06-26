import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import Root from '../root/root'
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





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
  
 /* CONTACTS */

  const submitForm = (e) => {
    e.preventDefault();

    const newContact = {name: name, email: email, contato: contato};

    setDivs(c => [...c, newContact]);

    setOption(c => [...c, newContact])

    setName(['']);
    setEmail(['']);
    setContato(['']);


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
            divs={divs.map((element, index) => <div className='newDiv' key={index}>
            {element.name} <br></br>
            {element.email} <br></br>
            {element.contato}
            </div>)} />}/>

          <Route path='Appointment' element={ 
              <Appointment 
                option={option.map((element, index) => 
                <option key={index}>
                {element.name} | {element.email} | {element.contato}
                </option>)}
                handleDateChange={handleDateChange} 
                handleTimeChange={handleTimeChange} 
                handleTitleChange={handleTitleChange}
                handleDescriptionChange={handleDescriptionChange} 
                description={description}
                date={date}
                time={time}
                title={title}
              />
            
          } />
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

// {divs.length + 1} 
//{option.length + 1}  

//setDate={setDate} setTime={setTime} setTitle={setTitle}

//{ <Appointment setDescription={setDescription} submit={submitAptm} option={option} divsAptm={divsAptm}  />}

//element={ <Contact divs={divs} setName={setName} setEmail={setEmail} setContato={setContato} submitForm={submitForm} />}/>


      // setDivs([...divs, divs.map((name, email, contato, index) => {
     //   return (
      //    <div key={index}>{name}</div>
     //   )
    //   })])

      //    setOption([...option, 
      //    <option className={styles.newOption} key={option.length}>
      //      <p>{name} | </p>
       //     <p>{email} | </p>   
        //    <p>{contato}</p> 
         //   {divs.length + 1}
        //  </option>]);  

        //element={ 
       //   <Appointment 
       //   name={name}
        //  email={email}
       //   contato={contato}
       //   setDate={setDate} 
       //   setTime={setTime} 
       //   setTitle={setTitle}
       //   setDescription={setDescription} 
        //  submit={submitAptm} 
        //  option={option} 
        //  divsAptm={divsAptm}
      //  />
      
  //  } />

  /*
   e.preventDefault();
        setDivsAptm([...divsAptm, 
          <div className='newDivAptm' key={divs.length}>
          <h2>{title}</h2>
          <p>{name}</p>
          <p>{email}</p>
          <p>{contato}</p>
          <h2>Details: </h2>
          <p>{description}</p>
          <p>{time}</p>
          <p>{date}</p>       
          </div>]);    
  
  
  */ 