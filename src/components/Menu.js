import React from 'react';

const drinks = [
  { name: 'Trà sữa', price: '25.000đ' },
  { name: 'Trà đào', price: '20.000đ' },
  { name: 'Sữa tươi trân châu đường đen', price: '30.000đ' },
  { name: 'Nước ép cam', price: '22.000đ' },
];

const snacks = [
  { name: 'Khoai tây chiên', price: '18.000đ' },
  { name: 'Bánh tráng trộn', price: '20.000đ' },
  { name: 'Cá viên chiên', price: '15.000đ' },
  { name: 'Xoài lắc', price: '17.000đ' },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Menu Nước Uống</h2>
      <ul>
        {drinks.map((item, idx) => (
          <li key={idx}>{item.name} - <span>{item.price}</span></li>
        ))}
      </ul>
      <h2>Đồ Ăn Vặt</h2>
      <ul>
        {snacks.map((item, idx) => (
          <li key={idx}>{item.name} - <span>{item.price}</span></li>
        ))}
      </ul>
    </section>
  );
}

export default Menu; 