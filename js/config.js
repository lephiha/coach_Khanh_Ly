
const COACH = {
  // Thông tin cơ bản
  name:       "Khánh Ly",
  nameShort:  "KL",
  brandName:  "COACH KL",
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
      tag:   "Huấn luyện viên • Nhà sáng lập FitX",
      title: "KHÁNH\nLY",
      desc:  "Chuyên gia luyện tập cá nhân hóa — từ người mới bắt đầu đến vận động viên chuyên nghiệp.",
      img: "assets/coaching2.JPG",
      emoji: "KL",
    },
    {
      tag:   "Dược sĩ • Tư vấn dinh dưỡng",
      title: "DINH DƯỠNG\nCHUYÊN SÂU",
      desc:  "Tối ưu sức khỏe và vóc dáng thông qua chế độ tập luyện và dinh dưỡng khoa học.",
      img:   "assets/talk8.JPG",
      emoji: "",
    },
    {
      tag:   "Diễn giả • Fitness & Lifestyle",
      title: "DIỄN GIẢ\nSỰ KIỆN",
      desc:  "Diễn giả tại 30+ sự kiện fitness và lifestyle trên toàn quốc.",
      img:   "assets/talked.JPG",
      emoji: "🎤",
    },
  ],

  // Về tôi
  about: {
    headline: "KHÔNG\nNGỪNG\nTIẾN BỘ",
    stats: [
      { num: "500+", label: "Học viên" },
      { num: "30+",  label: "Phòng tập FitX" },
      { num: "100%", label: "Đạt kết quả" },
    ],

    body: [
      "Xin chào, tôi là Nguyễn Khánh Ly – Nhà sáng lập và là Huấn luyện viên hệ thống chăm sóc sức khoẻ chủ động FITX.",
      "Tôi cùng đội ngũ FITX xây dựng một môi trường rèn luyện toàn diện, nơi bạn được chăm sóc thể chất – dinh dưỡng – tinh thần một cách khoa học, cá nhân hoá và bền vững.",
      "Chúng tôi cam kết đồng hành cùng bạn trên hành trình chinh phục mục tiêu sức khoẻ, vóc dáng và năng lượng sống tích cực mỗi ngày.",
      "Hãy để tôi giúp bạn đạt được phiên bản tốt nhất của chính mình!"
    ],
    img: "assets/ly3.JPG",
  },

  // Dịch vụ
  programs: [
    { title: "X-FIT",     desc: "Kháng lực, Cardio, tăng sức mạnh, định hình vóc dáng săn chắc.", video: "assets/serivce/xfit.mp4",    img: "assets/fit2.JPG" },
    { title: "X-STEP",    desc: "Nhảy bục, đốt năng lượng cao, vui và xả stress cực mạnh.",       video: "assets/serivce/xstep.mp4",   img: "assets/fit3.JPG" },
    { title: "X-BALANCE", desc: "Cân bằng cơ thể, chỉnh form, cải thiện xương khớp.",             video: "assets/serivce/xblance.mp4", img: "assets/fit4.JPG" },
  ],

  services: [
    { num:"01", icon:"🏋️", title:"HUẤN LUYỆN\n1-1",  desc:"Chương trình riêng cho bạn, theo dõi tiến độ chi tiết và điều chỉnh linh hoạt.", img:"assets/serivce/fit1-1.jpg",   hasDetail:true },
    { num:"02", icon:"👥", title:"NHÓM\nNHỎ",         desc:"Không khí sôi động, tạo động lực tập luyện cùng nhóm. Nhiều mức độ khác nhau.",  img:"assets/serivce/fit-group.jpg", hasDetail:true },
    { num:"03", icon:"📱", title:"ONLINE\nCOACHING",  desc:"Tập luyện linh hoạt mọi lúc mọi nơi. Chat trực tiếp theo dõi tiến độ.",          img:"assets/serivce/fit-online.jpg",hasDetail:true },
  ],

  // Before/After
  results: {
    beforeImg: "assets/kq/GIẢM_42KG.jpg",
    afterImg:  "assets/kq/GIẢM_42KG.jpg",
    stats: [
      { num: "−42kg",   label: "Giảm cân trung bình" },
      { num: "4 tháng", label: "Thời gian chương trình" },
      { num: "+42%",    label: "Cải thiện thể lực" },
    ],
  },

  // Portfolio
  portfolio: [
    { img: "assets/fit1.JPG",   cat: "training", title: "Buổi tập sáng sớm",        tag: "Tập luyện", wide: true  },
    { img: "assets/talk2.JPG",       cat: "event",    title: "Hội thảo Fitness", tag: "Sự kiện",   wide: false },
    { img: "assets/everybody1.JPG",      cat: "coaching", title: "Học viên tốt nghiệp khóa HLV",      tag: "Coaching",  wide: false },
    { img: "assets/ly2.JPG",       cat: "event",    title: "Tự tin trên sân khấu", tag: "Sự kiện",   wide: false },
    { img: "assets/talk7.JPG",   cat: "coaching", title: "Online Coaching Session",   tag: "Coaching",  wide: false },
    { img: "assets/fit3.JPG",   cat: "coaching", title: "Hướng dẫn tập luyện cá nhân",   tag: "Coaching",  wide: false },
    { img: "assets/fit2.JPG",        cat: "training", title: "Deadlift PR Day",           tag: "Tập luyện", wide: false },
    { img: "assets/workshop1.JPG",   cat: "event",    title: "Workshop Liên Đoàn Thể Thao",       tag: "Sự kiện",   wide: true  },
    { img: "assets/sk4.JPG",   cat: "event",    title: "Hội thảo về sức khỏe",       tag: "Sự kiện",   wide: true  },
    { img: "assets/coaching1.JPG",      cat: "coaching", title: "Kế hoạch cá nhân 1:1",      tag: "Coaching",  wide: false },
    { img: "assets/everyoutdoor2.JPG",        cat: "training", title: "Tập luyện ngoài trời",           tag: "Tập luyện", wide: false },
    { img: "assets/fit5.JPG",        cat: "training", title: "Tập luyện cùng FitX",           tag: "Tập luyện", wide: false },
    
  ],

  locations: [
  { name: "FitX 01 (FITX Victoria Văn Phú)",    addr: "Tầng 5, Toà V2 – Victoria, KĐT Văn Phú, Hà Đông, Hà Nội", url: "https://maps.app.goo.gl/wB7t8YLKHPh4MKk37" },
  { name: "FitX 02 (FITX K-Park Văn Phú)",       addr: "Tầng 27, K1 The K-Park, Văn Phú, Hà Đông, Hà Nội",        url: "https://maps.app.goo.gl/fbjvmyEnGJqZuiY19" },
  { name: "FitX 03 (FITX Terra An Hưng)",         addr: "V10-A07 Terra An Hưng, Hà Đông, Hà Nội",                  url: "https://maps.app.goo.gl/oZXYKaXptDANocf78" },
  { name: "FitX 05 (FITX Thái Bình)",             addr: "TP Thái Bình",                                             url: "https://maps.app.goo.gl/1KTFS5ZgqEUzA4ji7" },
  { name: "FitX 06 (FITX K2-K-Park Văn Phú)",    addr: "K2 K-Park, Văn Phú, Hà Đông, Hà Nội",                    url: "https://maps.app.goo.gl/fbjvmyEnGJqZuiY19" },
  { name: "FitX 07 (FITX Trần Cao Vân)",          addr: "Số 7 Trần Cao Vân, Hai Bà Trưng, Hà Nội",                url: "https://maps.app.goo.gl/aTxyBHXwpwmGYwp98" },
  { name: "FitX 08 (FITX Rùa Hà – Thanh Oai)",   addr: "Số 130, sau Ao Rùa Hà, Thanh Thụy, Thanh Oai, Hà Nội",  url: "https://maps.app.goo.gl/17CpTJPq635am3bo7" },
  { name: "FitX 09 (FITX Văn Phú)",               addr: "TT17 Văn Phú, Hà Đông, Hà Nội",                          url: "https://maps.app.goo.gl/QBvHxw7Px76w18ZQ8" },
  { name: "FitX 10 (FITX Chương Mỹ)",             addr: "Phụng Châu, Chương Mỹ, Hà Nội",                          url: "https://maps.app.goo.gl/poWtXURRkkNNj8b56" },
  { name: "FitX 12 (FITX Bắc Ninh)",              addr: "37 Minh Khai, TP Bắc Ninh",                               url: "https://maps.app.goo.gl/fo5Q6b1mNWquDsQz9" },
  { name: "FitX 13 (FITX Hà Trung – Thanh Hoá)", addr: "Hà Trung, Thanh Hoá",                                     url: "https://maps.app.goo.gl/yq76vZA46upfQmKH8" },
  { name: "FitX 16 (FITX Trần Phú – Thái Bình)", addr: "43 Trần Phú, TP Thái Bình",                               url: "https://maps.app.goo.gl/z2rofjFtz1fnN3xQ9" },
  { name: "FitX 19 (FITX Tổ Hữu – Văn Phúc)",   addr: "LK DM14-1, Tổ Hữu, Văn Phúc, Hà Đông, Hà Nội",         url: "https://maps.app.goo.gl/MhpGjGAYud2f5uhV8" },
  { name: "FitX 20 (FITX Đốc Đen – Thái Bình)",  addr: "Đốc Đen, TP Thái Bình",                                   url: "https://maps.app.goo.gl/DF5p9KmAxDjWqY4x7" },
  { name: "FitX 22 (FITX KĐT Petro – Thái Bình)",addr: "40 đường số 11, KĐT Petro, TP Thái Bình",                 url: "https://maps.app.goo.gl/dixhXUiTZFw1zrfX6" },
  { name: "FitX 23 (FITX Tổ Hiệu – Hà Đông)",   addr: "04 Tổ Hiến Thành, Văn Quán, Hà Đông, Hà Nội",           url: "https://maps.app.goo.gl/e8o33pEViQGPSDvv6" },
  { name: "FitX 25 (FITX Thái Nguyên)",           addr: "Tầng 6, 654 Bắc Kạn, TP Thái Nguyên",                   url: "https://maps.app.goo.gl/6q7EQ18383R9Denw5" },
  { name: "FitX 26 (FITX V2 Victoria Văn Phú)",  addr: "V2 Victoria Văn Phú, Hà Đông, Hà Nội",                   url: "https://maps.app.goo.gl/wB7t8YLKHPh4MKk37" },
  { name: "FitX 36 (FITX KĐT Việt Hưng)",        addr: "KĐT Việt Hưng, Long Biên, Hà Nội",                       url: "https://maps.app.goo.gl/wwM55VZ42PawyvVJ8" },
  { name: "Tâm An (Terra An Hưng)",               addr: "V8-A02 Terra An Hưng, Hà Đông, Hà Nội",                  url: "https://maps.app.goo.gl/oZXYKaXptDANocf78" },
  { name: "Core+ (Nguyễn Du)",                    addr: "85 Nguyễn Du, Hai Bà Trưng, Hà Nội",                     url: "https://maps.app.goo.gl/LFn26irWfoXgwHfKA" },
],

  // Liên hệ
  contact: {
    zalo:      { display: "0907 776 855", url: "https://zalo.me/0907776855" },
    phone:     { display: "0907.776.855", url: "tel:0907776855" },
    email:     { display: "khanhlyfitx@gmail.com", url: "mailto:khanhlyfitx@gmail.com" },
    messenger: { display: "Chat trực tiếp qua Facebook", url: "https://www.facebook.com/messages/t/548879625" },
    address:   { display: "TT17 Văn Phú (Ngã tư Hoàng Đôn Hòa - Hà Trì), Hà Đông, Hà Nội", url: "https://maps.app.goo.gl/QBvHxw7Px76w18ZQ8" },
  },

  // Footer
  footer: {
    copy: "© 2026 Khanh Ly. All rights reserved.",
  },
};
