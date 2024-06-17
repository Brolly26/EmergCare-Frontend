import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services.jsx';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Doctor from '../pages/Doctors/Doctor';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Contact from '../pages/Contact';
import MinhaConta from '../Dashboard/user-account/MinhaConta'
import Dashboard from '../Dashboard/docotr-account/Dashboard'
import ProtectedRoute from './ProtectedRoute';
import CheckoutSucess from '../pages/Doctors/CheckoutSucess.jsx';
import ConfirmAppointment from '../pages/Doctors/ConfirmAppointment.jsx';
import { CallInvitationEndReason } from '@zegocloud/zego-uikit-prebuilt';
import Call from '../components/ZegoCloud/call.jsx'
import Ajuda from '../Dashboard/docotr-account/Ajuda.jsx';
const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSucess />} />
      <Route path="/ConfirmAppointment" element={<ConfirmAppointment />} />
      <Route path="/call" element={<Call />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/ajuda" element={<Ajuda />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={ <Services />} />
      <Route path="/users/perfil/eu" element={<ProtectedRoute allowedRoles={['patient']}><MinhaConta /></ProtectedRoute> } />
      <Route path="/doctors/perfil/eu" element={ <ProtectedRoute  allowedRoles= {['doctor']}><Dashboard /></ProtectedRoute> } />


    </Routes>
};

export default Routers;
