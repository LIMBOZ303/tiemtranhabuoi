import React from 'react';
import { FaUtensils, FaMotorcycle, FaCouch, FaGlassCheers, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';
import './Services.css';

const services = [
  { icon: <FaUtensils />, title: 'Đặt bàn nhanh' },
  { icon: <FaMotorcycle />, title: 'Giao hàng tận nơi' },
  { icon: <FaCouch />, title: 'Không gian check-in' },
  { icon: <FaGlassCheers />, title: 'Đồ uống đa dạng' },
  { icon: <FaLeaf />, title: 'Đồ ăn sạch' },
  { icon: <FaMoneyBillWave />, title: 'Giá hợp lý' },
];

function Services() {
  return (
    <section className="services">
      <h2>Dịch Vụ & Điểm Mạnh</h2>
      <div className="services-list">
        {services.map((s, idx) => (
          <div className="service-item" key={idx}>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 