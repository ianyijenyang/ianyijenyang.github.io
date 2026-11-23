// International experience map. Each place: [lat, lon, English label, Chinese label, kind]
// kind: study | teach | research | olympic | home
const PLACES = [
  [29.65, -82.32, "Gainesville, FL: Ph.D., University of Florida (2026–)", "美國蓋恩斯維爾：佛羅里達大學博士班（2026–）", "home"],
  [35.78, -78.64, "Raleigh, NC: guest lecture, NC State University (2026)", "美國羅利：北卡羅來納州立大學客座演講（2026）", "research"],
  [40.81, -73.96, "New York: EMI training, Teachers College, Columbia University, and United Nations Headquarters visit (2025)", "美國紐約：哥倫比亞大學師範學院 EMI 師訓、參訪聯合國總部（2025）", "study"],
  [37.72, -122.48, "San Francisco: academic visit, San Francisco State University (2025)", "美國舊金山：舊金山州立大學學術參訪（2025）", "research"],
  [14.01, -60.99, "Castries, Saint Lucia: physical education teacher (2015–2016)", "聖露西亞：體育教師（2015–2016）", "teach"],
  [-22.91, -43.17, "Rio de Janeiro: Rio 2016 Olympic Games", "巴西里約：2016 里約奧運", "olympic"],
  [37.64, 21.63, "Ancient Olympia, Greece: International Olympic Academy (2019, 2023)", "希臘古奧林匹亞：國際奧林匹克學院（2019、2023）", "olympic"],
  [48.86, 2.35, "Paris: ECSS Congress presentation (2023)", "法國巴黎：歐洲運動科學學會年會發表（2023）", "research"],
  [46.52, 6.63, "Lausanne: ECSS Congress presentation and visit to the IOC Olympic Studies Centre (2026)", "瑞士洛桑：歐洲運動科學學會年會發表、拜訪國際奧會奧林匹克研究中心（2026）", "research"],
  [46.20, 6.14, "Geneva: Self-Determination Theory Conference (2026)", "瑞士日內瓦：國際自我決定理論研討會發表（2026）", "research"],
  [50.08, 14.44, "Prague: International Congress of Psychology (2024)", "捷克布拉格：國際心理學大會發表（2024）", "research"],
  [1.55, 110.36, "Kuching, Malaysia: AASM Conference (2023)", "馬來西亞古晉：亞洲運動管理學會年會發表（2023）", "research"],
  [21.03, 105.85, "Hanoi, Vietnam: wrestling and judo team training exchange, with a Vietnamese TV (VTVcab) interview (2025)", "越南河內：角力柔道隊移地訓練交流，接受越南電視台（VTVcab）採訪（2025）", "teach"],
  [37.67, 128.70, "PyeongChang, Korea: AASM Conference (2017)", "韓國平昌：亞洲運動管理學會年會發表（2017）", "research"],
  [36.01, 127.66, "Muju, Korea: World Taekwondo General Assembly internship (2017)", "韓國茂朱：世界跆拳道總會會員大會見習（2017）", "olympic"],
  [36.08, 140.11, "Tsukuba, Japan: one-year scholarship exchange student, University of Tsukuba (2012–2013)", "日本筑波：筑波大學公費交換學生一年（2012–2013）", "study"],
  [35.18, 136.91, "Nagoya, Japan: East Asian Judo Championships internship (2015)", "日本名古屋：東亞柔道錦標賽見習（2015）", "olympic"],
  [35.68, 139.76, "Tokyo: sport-science study tour (2019)", "日本東京：運動科學研究團隊參訪（2019）", "research"],
  [-25.75, 28.19, "South Africa: International Youth Ambassador tour, Ministry of Foreign Affairs (2014)", "南非：外交部國際青年大使出訪（2014）", "diplomacy"],
  [-26.32, 31.14, "Eswatini: International Youth Ambassador tour (2014)", "史瓦帝尼：外交部國際青年大使出訪（2014）", "diplomacy"],
  [32.29, 36.32, "Jordan: International Youth Ambassador tour, including a performance at Zaatari refugee camp (2014)", "約旦：外交部國際青年大使出訪，於 Zaatari 難民營演出（2014）", "diplomacy"],
  [23.59, 58.38, "Oman: International Youth Ambassador tour (2014)", "阿曼：外交部國際青年大使出訪（2014）", "diplomacy"],
  [26.23, 50.59, "Bahrain: International Youth Ambassador tour (2014)", "巴林：外交部國際青年大使出訪（2014）", "diplomacy"],
  [25.20, 55.27, "United Arab Emirates: International Youth Ambassador tour (2014)", "阿拉伯聯合大公國：外交部國際青年大使出訪（2014）", "diplomacy"],
  [39.90, 116.40, "Beijing, China: academic visits", "中國北京：學術拜訪", "visit"],
  [30.59, 114.31, "Hubei, China: academic visits", "中國湖北：學術拜訪", "visit"],
  [34.75, 113.63, "Henan, China: academic visits", "中國河南：學術拜訪", "visit"],
  [24.48, 118.09, "Xiamen, Fujian, China: academic visits", "中國福建廈門：學術拜訪", "visit"],
  [34.34, 108.94, "Xi'an, China: Olympic seminar", "中國西安：奧林匹克研討會", "olympic"],
  [22.32, 114.17, "Hong Kong: gold medal, Hong Kong Judo Open", "香港：香港柔道公開賽金牌", "athlete"],
  [22.20, 113.55, "Macau: academic visit", "澳門：學術拜訪", "visit"],
  [13.76, 100.50, "Thailand: academic visit", "泰國：學術拜訪", "visit"],
  [1.35, 103.82, "Singapore: academic visit", "新加坡：學術拜訪", "visit"],
  [14.60, 120.98, "Philippines: academic visit", "菲律賓：學術拜訪", "visit"],
  [17.39, 78.49, "Hyderabad, India: Asian judo championships, third place (2007)", "印度海德拉巴：亞洲柔道錦標賽第三名（2007）", "athlete"],
  [33.89, 35.50, "Lebanon: led the Chinese Taipei youth national judo team at an Asian championship", "黎巴嫩：帶領亞青柔道國家隊參賽", "teach"],
  [55.76, 37.62, "Russia: World Cup national team athlete", "俄羅斯：世界盃國手", "athlete"],
  [43.74, 7.42, "Monaco: academic visit", "摩納哥：學術拜訪", "visit"],
  [41.90, 12.50, "Italy: academic visit", "義大利：學術拜訪", "visit"],
  [48.21, 16.37, "Austria: academic visit", "奧地利：學術拜訪", "visit"],
  [47.50, 19.04, "Hungary: academic visit", "匈牙利：學術拜訪", "visit"],
  [45.81, 15.98, "Croatia: academic visit", "克羅埃西亞：學術拜訪", "visit"],
  [46.06, 14.51, "Slovenia: academic visit", "斯洛維尼亞：學術拜訪", "visit"],
  [23.11, -82.37, "Cuba: academic visit", "古巴：學術拜訪", "visit"],
  [13.10, -59.61, "Barbados: academic visit", "巴貝多：學術拜訪", "visit"],
  [10.65, -61.51, "Trinidad and Tobago: academic visit", "千里達及托巴哥：學術拜訪", "visit"],
  [8.98, -79.52, "Panama: academic visit", "巴拿馬：學術拜訪", "visit"],  [47.66, -122.31, "Seattle: two-month visiting student, University of Washington, on an NTNU academic excellence scholarship (2012)", "美國西雅圖：華盛頓大學短期訪問學生兩個月，師大書卷獎補助（2012）", "study"],
  [37.43, -122.17, "Stanford University: guest judo coach (2025)", "美國史丹佛大學：客座柔道教練（2025）", "teach"],
  [41.88, -87.63, "Chicago: academic visit", "美國芝加哥：學術拜訪", "visit"],
  [43.06, 141.35, "Hokkaido, Japan: academic visit", "日本北海道：學術拜訪", "visit"],
  [38.27, 140.87, "Tohoku, Japan: academic visits, including Nishikawa, Yamagata (2018)", "日本東北：學術拜訪（含 2018 山形縣西川町交流）", "visit"],
  [34.69, 135.50, "Kansai, Japan: academic visit", "日本關西：學術拜訪", "visit"],
  [34.39, 132.46, "Chugoku, Japan: academic visit", "日本中國地區：學術拜訪", "visit"],
  [33.84, 132.77, "Shikoku, Japan: academic visit", "日本四國：學術拜訪", "visit"],
  [31.38, 130.85, "Kanoya, Kyushu, Japan: National Institute of Fitness and Sports in Kanoya (sport management seminar, 2018)", "日本九州鹿屋：鹿屋體育大學（2018 運動管理研習）", "study"],  [25.03, 121.56, "Taipei: NTNU B.Ed. and MBA; research assistant and adjunct lecturer (2010–2020)", "臺北：臺灣師範大學學士、碩士，研究助理與兼任講師（2010–2020）", "home"],
  [22.65, 120.61, "Pingtung: faculty, NPUST (2020–2026)", "屏東：屏東科技大學教師（2020–2026）", "home"]
];

const COLORS = { home: "#1f3a6e", study: "#2a7f62", teach: "#c0632b", research: "#6b4fa3", olympic: "#b8902a", diplomacy: "#2b8cbe", athlete: "#c2185b", visit: "#7d8b99" };

function drawMap(lang) {
  const el = document.getElementById("worldmap");
  if (!el || typeof L === "undefined") return;
  const map = L.map(el, { scrollWheelZoom: false, worldCopyJump: true, minZoom: 1 }).setView([25, 20], 2);
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
    maxZoom: 12
  }).addTo(map);
  PLACES.forEach(function (p) {
    L.circleMarker([p[0], p[1]], {
      radius: 7, color: "#ffffff", weight: 2, fillColor: COLORS[p[4]], fillOpacity: 0.95
    }).addTo(map).bindPopup(lang === "zh" ? p[3] : p[2]);
  });
}
