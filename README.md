# Khánh Ly FitX — Hướng Dẫn Sử Dụng

## Cấu Trúc Project

```
coach-project/
├── index.html              ← File chính (mở trên browser là chạy)
├── config.js               ← ⭐ Chỉnh sửa TẤT CẢ nội dung & ảnh tại đây
├── README.md               ← File này
└── assets/
    └── images/
        ├── about/
        │   └── coach-portrait.jpg     ← Ảnh chân dung coach (Hero + About)
        ├── slider/
        │   ├── slide-1.jpg
        │   ├── slide-2.jpg
        │   └── slide-3.jpg
        ├── before-after/
        │   ├── before.jpg
        │   └── after.jpg
        └── portfolio/
            ├── training-1.jpg
            ├── training-2.jpg
            ├── event-1.jpg
            ├── event-2.jpg
            ├── coaching-1.jpg
            └── coaching-2.jpg
```

## Cách Thay Ảnh

1. Copy ảnh vào thư mục assets/images/... tương ứng
2. Đặt tên file đúng như trong config.js (hoặc sửa tên trong config)

Khi chưa có ảnh → website vẫn hiển thị bình thường với placeholder.

## Kích Thước Ảnh Khuyến Nghị

| Vị trí | Tỉ lệ | Kích thước |
|--------|-------|-----------|
| Hero / About | 3:4 dọc | 800×1067px |
| Slider | 16:9 ngang | 1600×900px |
| Before/After | 16:9 ngang | 1200×675px |
| Portfolio thường | 4:5 dọc | 600×750px |
| Portfolio wide | 8:5 ngang | 1200×750px |

Tối ưu ảnh: https://squoosh.app (nén xuống <200KB/file)

## Mở Website

Double-click index.html → mở trên Chrome. Không cần server.

## Deploy Miễn Phí

Netlify Drop: kéo thả thư mục coach-project vào https://app.netlify.com/drop
