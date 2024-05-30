import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ResponsiveAppBar from './components/Navbar';
import LoginForm from './components/login';
import DashboardPage from './components/dashboard';
import './App.css';
import AddStudentForm from './components/add-student';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import UploadCertificatesForm from './components/upload-certificates';
import GetStudentByAdmissionNumberForm from './components/view-student';
import ViewCertificate from './components/certificates';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/view-student' element={<GetStudentByAdmissionNumberForm/>}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path='/add-student' element={<AddStudentForm/>}/>
        <Route path='/certificates' element={<ViewCertificate/>}/>
        <Route path='/upload-certificates' element={<UploadCertificatesForm />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
