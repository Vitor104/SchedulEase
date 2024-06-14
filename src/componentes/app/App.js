import styles from'./App.css';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import Root from '../root/root';
import Contact from "../contacts/contact";
import Appointment from "../appointments/appointment";





function App() {
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
          <Route path='Contact' element={ <Contact />} />
          <Route path='Appointment' element={ <Appointment />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
