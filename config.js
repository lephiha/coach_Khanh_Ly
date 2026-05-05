
window.COACH_CONFIG = {

  // ── THÔNG TIN CÁ NHÂN ──────────────────────────
  coach: {
    name:       "Khánh Ly",          
    nameShort:  "KL",                   
    title:      "Fitness & Life Coach", 
    tagline:    "BIẾN ĐỔI CƠ THỂ",     
    tagline2:   "ĐỊNH HÌNH",            
    tagline3:   "BẢN THÂN",            
    subtitle:   "Không chỉ là tập gym — là hành trình tái định hình bản thân. Cùng hệ thống luyện tập cá nhân hóa và tư duy chiến lược.",
    brandName:  "Khánh Ly FitX",          
    instagram:  "@coachkhoa.elite",
    zalo:       "0907 776 855",
    whatsapp:   "+84 907 776 855",
    email:      "khanhlyfitx@gmail.com",
    zaloLink:   "https://zalo.me/0907776855",
    waLink:     "https://wa.me/84907776855",
    igLink:     "https://instagram.com/coachkhoa.elite",
  },

  // ── CHỈ SỐ THỐNG KÊ HERO ───────────────────────
  stats: [
    { num: "500+", label: "Học viên" },
    { num: "8",    label: "Năm kinh nghiệm" },
    { num: "95%",  label: "Đạt mục tiêu" },
  ],

  // ── ABOUT ──────────────────────────────────────
  about: {
    label:   "Về tôi",
    heading: ["KHÔNG", "NGỪNG", "TIẾN BỘ"],
    body: [
      "Tôi bắt đầu hành trình fitness từ con số 0 — không nền tảng thể thao, không huấn luyện viên. Chỉ có ý chí và hàng nghìn giờ tự học, thử nghiệm.",
      "Sau 8 năm, tôi đã giúp hơn 500 học viên đạt mục tiêu — từ giảm mỡ, tăng cơ đến cải thiện sức khỏe tổng thể và thay đổi tư duy hoàn toàn.",
      "Phương pháp của tôi không phải ",
    ],
    badge:      "8+",
    badgeLabel: "Năm kinh nghiệm",
    // 📁 Thay ảnh about: đặt file vào assets/images/about/
    image:      "assets/images/about/coach-portrait.jpg",
    // Nếu chưa có ảnh, để "" — website hiển thị placeholder
  },

  // ── SLIDER AVATAR (Hero Slides) ────────────────
  // 📁 Thay ảnh slider: đặt file vào assets/images/slider/
  slides: [
    {
      tag:   "Fitness Coach • 8 năm kinh nghiệm",
      title: ["KHÁNH", "LY"],
      desc:  "Chuyên gia luyện tập cá nhân hóa — từ người mới bắt đầu đến vận động viên chuyên nghiệp.",
      image: "assets/ly5.JPG",  // ← thay ảnh tại đây
      // emoji dùng khi chưa có ảnh:
      placeholder: "🏋️",
    },
    {
      tag:   "Thành tích & Chứng chỉ",
      title: ["HCM", "CHAMPION"],
      desc:  "Á quân thành phố Hồ Chí Minh 2022 — NASM Certified Personal Trainer.",
      image: "assets/images/slider/slide-2.jpg",
      placeholder: "🏆",
    },
    {
      tag:   "Diễn giả sự kiện",
      title: ["PUBLIC", "SPEAKER"],
      desc:  "Diễn giả tại 30+ sự kiện fitness và lifestyle trên toàn quốc.",
      image: "assets/talk1.jpg",
      placeholder: "🎤",
    },
  ],

  // ── DỊCH VỤ ────────────────────────────────────
  services: [
    {
      num:      "01",
      icon:     "🏋️",
      title:    ["PERSONAL", "TRAINING"],
      desc:     "Buổi luyện tập 1:1 được thiết kế riêng theo mục tiêu, thể trạng và lịch trình của bạn. Tối đa hiệu quả — tối thiểu thời gian lãng phí.",
      hasDetail: true,
    },
    {
      num:      "02",
      icon:     "📱",
      title:    ["ONLINE", "COACHING"],
      desc:     "Coaching từ xa — kế hoạch luyện tập, dinh dưỡng, check-in hằng tuần và hỗ trợ 24/7 qua app. Không giới hạn địa điểm.",
      hasDetail: true,
    },
    {
      num:      "03",
      icon:     "🎤",
      title:    ["EVENT", "SPEAKER"],
      desc:     "Diễn giả chuyên nghiệp về chủ đề Fitness, Lifestyle và Mindset tại các sự kiện doanh nghiệp, hội thảo sức khỏe.",
      hasDetail: false,  // false → hiển thị "Đang cập nhật"
    },
  ],

  // ── BEFORE / AFTER ─────────────────────────────
  beforeAfter: {
    // 📁 Thay ảnh: đặt vào assets/images/before-after/
    imageAfter:  "assets/images/before-after/after.jpg",
    imageBefore: "assets/images/before-after/before.jpg",
    labelAfter:  "Sau 12 tuần",
    labelBefore: "Tuần đầu",
    stats: [
      { num: "−18kg",   label: "Giảm cân trung bình" },
      { num: "12 tuần", label: "Thời gian chương trình" },
      { num: "+32%",    label: "Cải thiện thể lực" },
    ],
  },

  // ── PORTFOLIO ──────────────────────────────────
  // categories: "training" | "event" | "coaching"
  // 📁 Thay ảnh: đặt file vào assets/images/portfolio/
  portfolio: [
    {
      title: "Buổi tập sáng sớm",
      cat:   "training",
      wide:  true,          // true = chiếm 2 cột
      image: "assets/images/portfolio/training-1.jpg",
      placeholder: "💪",
    },
    {
      title: "Hội thảo Fitness HCM 2024",
      cat:   "event",
      wide:  false,
      image: "assets/images/portfolio/event-1.jpg",
      placeholder: "🎤",
    },
    {
      title: "Online Coaching Session",
      cat:   "coaching",
      wide:  false,
      image: "assets/images/portfolio/coaching-1.jpg",
      placeholder: "📱",
    },
    {
      title: "Deadlift PR Day",
      cat:   "training",
      wide:  false,
      image: "assets/images/portfolio/training-2.jpg",
      placeholder: "🏋️",
    },
    {
      title: "Workshop Dinh dưỡng thể thao",
      cat:   "event",
      wide:  true,
      image: "assets/images/portfolio/event-2.jpg",
      placeholder: "🏆",
    },
    {
      title: "Kế hoạch cá nhân 1:1",
      cat:   "coaching",
      wide:  false,
      image: "assets/images/portfolio/coaching-2.jpg",
      placeholder: "📊",
    },
  ],
};
