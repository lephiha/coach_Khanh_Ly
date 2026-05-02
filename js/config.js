// ═══════════════════════════════════════════
// COACH CONFIG — Chỉnh nội dung tại đây
// ═══════════════════════════════════════════

const COACH = {
  // Thông tin cơ bản
  name:       "NGUYEN KHOA",
  nameShort:  "NK",
  brandName:  "COACH NK",
  tagline:    "Fitness & Lifestyle Coach",

  // Thống kê hero
  stats: [
    { num: "500+", label: "Học viên" },
    { num: "8",    label: "Năm kinh nghiệm" },
    { num: "95%",  label: "Đạt mục tiêu" },
  ],

  // Slides avatar
  slides: [
    {
      tag:   "Fitness Coach • 8 năm kinh nghiệm",
      title: "NGUYEN\nKHOA",
      desc:  "Chuyên gia luyện tập cá nhân hóa — từ người mới bắt đầu đến vận động viên chuyên nghiệp.",
      img:   "assets/images/slider/slide-1.jpg",
      emoji: "NK",
    },
    {
      tag:   "Thành tích & Chứng chỉ",
      title: "HCM\nCHAMPION",
      desc:  "Á quân thành phố Hồ Chí Minh 2022 — NASM Certified Personal Trainer.",
      img:   "assets/images/slider/slide-2.jpg",
      emoji: "🏆",
    },
    {
      tag:   "Diễn giả sự kiện",
      title: "PUBLIC\nSPEAKER",
      desc:  "Diễn giả tại 30+ sự kiện fitness và lifestyle trên toàn quốc.",
      img:   "assets/images/slider/slide-3.jpg",
      emoji: "🎤",
    },
  ],

  // Về tôi
  about: {
    headline: "KHÔNG\nNGỪNG\nTIẾN BỘ",
    years:    "8+",
    body: [
      "Tôi bắt đầu hành trình fitness từ con số 0 — không nền tảng thể thao, không huấn luyện viên. Chỉ có ý chí và hàng nghìn giờ tự học, thử nghiệm.",
      "Sau 8 năm, tôi đã giúp hơn 500 học viên đạt mục tiêu — từ giảm mỡ, tăng cơ đến cải thiện sức khỏe tổng thể và thay đổi tư duy hoàn toàn.",
      "Phương pháp của tôi không phải "diet" cực đoan hay lịch tập kiệt sức — mà là hệ thống bền vững, được cá nhân hóa cho từng người.",
    ],
    img: "assets/images/hero/hero-portrait.jpg",
  },

  // Dịch vụ
  services: [
    {
      num:      "01",
      icon:     "🏋️",
      title:    "PERSONAL\nTRAINING",
      desc:     "Buổi luyện tập 1:1 được thiết kế riêng theo mục tiêu, thể trạng và lịch trình của bạn. Tối đa hiệu quả — tối thiểu thời gian lãng phí.",
      img:      "assets/images/services/service-training.jpg",
      hasDetail: true,
    },
    {
      num:      "02",
      icon:     "📱",
      title:    "ONLINE\nCOACHING",
      desc:     "Coaching từ xa — kế hoạch luyện tập, dinh dưỡng, check-in hằng tuần và hỗ trợ 24/7 qua app. Không giới hạn địa điểm.",
      img:      "assets/images/services/service-coaching.jpg",
      hasDetail: true,
    },
    {
      num:      "03",
      icon:     "🎤",
      title:    "EVENT\nSPEAKER",
      desc:     "Diễn giả chuyên nghiệp về chủ đề Fitness, Lifestyle và Mindset tại các sự kiện doanh nghiệp, hội thảo sức khỏe.",
      img:      "assets/images/services/service-speaker.jpg",
      hasDetail: false,
    },
  ],

  // Before/After
  results: {
    beforeImg: "assets/images/before-after/before.jpg",
    afterImg:  "assets/images/before-after/after.jpg",
    stats: [
      { num: "−18kg",   label: "Giảm cân trung bình" },
      { num: "12 tuần", label: "Thời gian chương trình" },
      { num: "+32%",    label: "Cải thiện thể lực" },
    ],
  },

  // Portfolio
  portfolio: [
    { img: "assets/images/portfolio/p1.jpg", cat: "training", title: "Buổi tập sáng sớm",        tag: "Tập luyện", wide: true  },
    { img: "assets/images/portfolio/p2.jpg", cat: "event",    title: "Hội thảo Fitness HCM 2024", tag: "Sự kiện",   wide: false },
    { img: "assets/images/portfolio/p3.jpg", cat: "coaching", title: "Online Coaching Session",   tag: "Coaching",  wide: false },
    { img: "assets/images/portfolio/p4.jpg", cat: "training", title: "Deadlift PR Day",           tag: "Tập luyện", wide: false },
    { img: "assets/images/portfolio/p5.jpg", cat: "event",    title: "Workshop Dinh dưỡng",       tag: "Sự kiện",   wide: true  },
    { img: "assets/images/portfolio/p6.jpg", cat: "coaching", title: "Kế hoạch cá nhân 1:1",      tag: "Coaching",  wide: false },
  ],

  // Liên hệ
  contact: {
    headline: "SẴN SÀNG\nTHAY ĐỔI?",
    sub:      "Điền form hoặc nhắn tin trực tiếp. Tôi sẽ phản hồi trong 24 giờ và thiết kế chương trình riêng cho bạn.",
    zalo:     { display: "0901 234 567", url: "https://zalo.me/0901234567" },
    whatsapp: { display: "+84 901 234 567", url: "https://wa.me/84901234567" },
    instagram:{ display: "@coachkhoa.elite", url: "https://instagram.com/coachkhoa.elite" },
  },

  // Footer
  footer: {
    copy: "© 2025 Coach NK. All rights reserved.",
  },
};
