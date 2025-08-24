# Tiệm Trà Nhà Bưởi

Website chính thức của Tiệm Trà Nhà Bưởi - Nơi thư giãn, thưởng trà và gắn kết bạn bè!

## 🚀 Deploy lên GitHub Pages

### Cách 1: Sử dụng GitHub Actions (Khuyến nghị)

1. Push code lên repository GitHub
2. Vào Settings > Pages
3. Chọn Source: "Deploy from a branch"
4. Chọn Branch: "gh-pages" và folder: "/ (root)"
5. Click Save

### Cách 2: Deploy thủ công

```bash
# Cài đặt dependencies
npm install

# Build project
npm run build

# Deploy lên GitHub Pages
npm run deploy
```

## 🛠️ Cài đặt và chạy locally

```bash
# Clone repository
git clone https://github.com/tiemtranhabuoi/tiemtranhabuoi.git

# Di chuyển vào thư mục project
cd tiemtranhabuoi

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

## 📁 Cấu trúc project

```
tiemtranhabuoi/
├── public/
│   ├── index.html
│   └── 404.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Banner.js
│   │   ├── About.js
│   │   └── ...
│   ├── asset/
│   │   ├── bgtiemtra.jpg
│   │   └── logo.png
│   └── App.js
└── package.json
```

## 🌐 Website

Website được deploy tại: https://tiemtranhabuoi.github.io/tiemtranhabuoi

## 📝 Lưu ý

- Đảm bảo repository có tên chính xác: `tiemtranhabuoi`
- Username GitHub phải là: `tiemtranhabuoi`
- Nếu thay đổi tên repository, cập nhật `homepage` trong `package.json`
