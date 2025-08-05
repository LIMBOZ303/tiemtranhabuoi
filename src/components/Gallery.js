import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Gallery.css';

const ITEMS_PER_PAGE = 8;

const menuCategories = {
  'tra-trai-cay-tuoi': {
    title: 'Trà Trái Cây Tươi',
    items: [
      'Trà Dứa Thốt Nốt', 'Dâu Tằm Đặc Rim', 'Hoa Quả Nhiệt Đới', 'Trà Dưa Tằm - Vải', 'Trà Mãng Cầu', 'Trà Thanh Long Đỏ', 'Trà Lài Đặc Biệt', 'Trà Lài Vải - Hạt Sen', 'Trà Dâu Đặc Biệt', 'Trà Xoài Đặc Biệt', 'Trà Dưa Lưới', 'Trà Đào Lắc Phúc Bồn Tử', 'Trà Đào Lắc Dâu Tây', 'Trà Đào Lắc Xoài Đặc Biệt', 'Trà Đào Lắc Dâu Tằm', 'Trà Đào Lắc Xoài Dâu Đặc Biệt', 'Trà Đào Lắc - Vải', 'Trà Đào Lắc - Hoa Quả', 'Trà Đào Lắc - Thơm', 'Olong Sen Vàng', 'Olong Sen Vàng Kem Cheese', 'Mè Đen Đặc Rim', 'Nước Long Nhãn', 'Trà Lài Vải - Hạt Sen', 'Trà Mãng Cầu', 'Trà Xoài Đặc Biệt', 'Trà Dưa Lưới'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?fruit,tea,drink,${i}` })),
  },
  'hong-tra-nguyen-la': {
    title: 'Hồng Trà Nguyên Lá',
    items: [
      'Hồng Trà Vải', 'Hồng Trà Việt Quất', 'Hồng Trà Mật Ong', 'Hồng Trà Đào', 'Hồng Trà Sữa', 'Hồng Trà Sữa Trân Châu', 'Hồng Trà Đặc Biệt', 'Hồng Trà Kem Cheese'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?blacktea,drink,${i}` })),
  },
  'sua-chua': {
    title: 'Sữa Chua',
    items: [
      'Sữa Chua Việt Quất', 'Sữa Chua Dâu Tây', 'Sữa Chua Xoài Đặc Biệt', 'Sữa Chua Lắc - Phúc Bồn Tử', 'Sữa Chua Lắc - Dâu Tây', 'Sữa Chua Lắc - Xoài Đặc Biệt', 'Sữa Chua Lắc - Dâu Tằm', 'Sữa Chua Lắc - Xoài Dâu Đặc Biệt'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?yogurt,drink,${i}` })),
  },
  'tra-sua': {
    title: 'Trà Sữa',
    items: [
      'Trà Sữa Đặc Biệt', 'Trà Sữa Full Topping', 'Trà Sữa Thốt Nốt', 'Trà Sữa Đặc Rim', 'Trà Sữa Trân Châu Kem Trứng', 'Trà Sữa Trân Châu Flan', 'Trà Sữa Trân Châu Bánh Flan', 'Trà Sữa Trân Châu Pudding', 'Trà Sữa Trân Châu', 'Trà Sữa Trân Châu Đường Đen', 'Sữa Tươi Thốt Nốt Đường Đen', 'Sữa Tươi Đặc Rim Đường Đen', 'Trà Sữa Matcha Bánh Flan', 'Trà Sữa Trân Châu Socola', 'Late Matcha Kem Cheese'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?milktea,drink,${i}` })),
  },
  'nuoc-ep': {
    title: 'Nước Ép',
    items: [
      'Nước Ép Mix Tự Chọn', 'Ép Cam', 'Ép Cam Sữa Lắc', 'Ép Dứa Lắc', 'Ép Bưởi Hồng', 'Ép Ổi', 'Ép Cà Rốt', 'Ép Cà Rốt - Dứa Hấu', 'Ép Cà Rốt - Thơm', 'Ép Cà Chua'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?juice,drink,${i}` })),
  },
  'coffee': {
    title: 'Coffee',
    items: [
      'Cà Phê Đá', 'Cà Phê Sữa', 'Bạc Xỉu', 'Milo Dầm Đặc Biệt', 'Milo Dầm Full Topping', 'Milo Dầm Trân Châu', 'Milo Dầm Bánh Flan', 'Milo Dầm Pudding'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?coffee,drink,${i}` })),
  },
  'an-vat': {
    title: 'Ăn Vặt',
    items: [
      'Bánh Chuối Chấm Kem', 'Bánh Flan Cafe', 'Bánh Flan Trứng', 'Bánh Plan Thập Cẩm', 'Bánh Tráng Trộn Đặc Biệt', 'Bánh Tráng Me', 'Bánh Tráng Phô Mai', 'Bánh Tráng Thập Cẩm', 'Bánh Plan Trứng Cuộn', 'Bánh Plan Thập Cẩm', 'Bánh Plan Thập Cẩm', 'Bánh Plan Thập Cẩm', 'Bánh Plan Thập Cẩm', 'Bánh Plan Thập Cẩm', 'Bánh Plan Thập Cẩm'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?snack,food,${i}` })),
  },
  'sinh-to': {
    title: 'Sinh Tố',
    items: [
      'Sinh Tố Bơ (Theo Mùa)', 'Sinh Tố Kem Cheese', 'Sinh Tố Dâu', 'Sinh Tố Mít', 'Sinh Tố Dưa Gang', 'Sinh Tố Mix Dưa Gang', 'Sinh Tố Mix Dâu', 'Sinh Tố Dưa Lưới', 'Sinh Tố Mix Dâu'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?smoothie,drink,${i}` })),
  },
  'trai-cay-dam': {
    title: 'Trái Cây Dầm',
    items: [
      'Trái Cây Tươi Sét Chấm Muối', 'Trái Cây Dầm', 'Trái Cây Dầm Sữa Chua', 'Trái Cây Dầm Sữa Đặc', 'Trái Cây Dầm Mix', 'Trái Cây Dầm Mix Dâu', 'Trái Cây Dầm Mix Sữa Chua', 'Trái Cây Dầm Mix Sữa Đặc'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?fruit,food,${i}` })),
  },
  'topping': {
    title: 'Topping',
    items: [
      'Trân Châu Trắng', 'Trân Châu Đen', 'Pudding', 'Bánh Flan', 'Thạch Dừa', 'Thạch Phô Mai', 'Trái Cây', 'Socola', 'Thêm vị: Macscha', 'Dâu', 'Socola'
    ].map((name, i) => ({ name, price: '', desc: '', img: `https://source.unsplash.com/400x300/?topping,food,${i}` })),
  },
};

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('tra-trai-cay-tuoi');
  const [page, setPage] = useState(1);

  const items = menuCategories[activeCategory].items;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const itemsToShow = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  // Logic để hiển thị phân trang thông minh
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Hiển thị tất cả trang nếu ít hơn 5 trang
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logic hiển thị thông minh cho nhiều trang
      if (page <= 3) {
        // Trang đầu: hiển thị 1,2,3,4,5...last
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 5) {
          pages.push('...');
          pages.push(totalPages);
        }
      } else if (page >= totalPages - 2) {
        // Trang cuối: hiển thị 1...last-4,last-3,last-2,last-1,last
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Trang giữa: hiển thị 1...page-1,page,page+1...last
        pages.push(1);
        pages.push('...');
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section className="gallery">
      <h2>Menu Đa Dạng</h2>
      <div className="category-tabs">
        {Object.keys(menuCategories).map(category => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {menuCategories[category].title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + '-' + page}
          className="gallery-list"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {itemsToShow.map((item, idx) => (
            <motion.div
              className="gallery-item"
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(255,152,0,0.18)' }}
            >
              <img src={item.img} alt={item.name} />
              <div className="gallery-info">
                <h4>{item.name}</h4>
                <p className="gallery-desc">{item.desc}</p>
                <span className="gallery-price">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {totalPages > 1 && (
        <div className="gallery-pagination">
          <button 
            className="pagination-nav"
            onClick={() => handlePageChange(page - 1)} 
            disabled={page === 1}
          >
            <span>&laquo;</span> Trước
          </button>
          
          <div className="page-numbers">
            {getPageNumbers().map((pageNum, index) => (
              <button
                key={index}
                className={`page-number ${pageNum === page ? 'active' : ''} ${pageNum === '...' ? 'ellipsis' : ''}`}
                onClick={() => typeof pageNum === 'number' ? handlePageChange(pageNum) : null}
                disabled={pageNum === '...'}
              >
                {pageNum}
              </button>
            ))}
          </div>
          
          <button 
            className="pagination-nav"
            onClick={() => handlePageChange(page + 1)} 
            disabled={page === totalPages}
          >
            Sau <span>&raquo;</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery; 