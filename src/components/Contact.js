import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookMessenger, FaStore } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Liên Hệ & Địa Chỉ</h2>
      <div className="contact-list">
        <div className="contact-item"><FaStore /> <b>Chi nhánh 1:</b> <a href="https://www.google.com/maps/place/TI%E1%BB%86M+TR%C3%80+NH%C3%80+B%C6%AF%E1%BB%9EI/@10.8387013,106.6708132,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3175293f680c8e0f:0x33e05d1b108136fb!8m2!3d10.8387013!4d106.6733881!16s%2Fg%2F11ssc414sh?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> 10 Đường số 7, Linh Trung, Thủ Đức</a></div>
        <div className="contact-item"><FaStore /> <b>Chi nhánh 2:</b> <a href="https://www.google.com/maps/place/Tr%C3%A0+Nh%C3%A0+B%C6%B0%E1%BB%9Bi+CN2/@10.8272007,106.6855611,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31752945b22a3261:0xd094ef81167b07bf!8m2!3d10.8272007!4d106.688136!16s%2Fg%2F11vzdkydvj?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> 18 Đường số 8, Linh Trung, Thủ Đức</a></div>
        <div className="contact-item"><FaPhoneAlt /> <a href="tel:0906704190">0906 704 190</a></div>
        <div className="contact-item"><FaFacebookMessenger /> <a href="https://m.me/quannuocdoanvat" target="_blank" rel="noopener noreferrer">Facebook Messenger</a></div>
        <div className="contact-item"><FaClock /> 10:00 - 05:00 (Hàng ngày)</div>
      </div>
    </section>
  );
}

export default Contact; 