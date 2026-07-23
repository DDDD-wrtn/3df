export const BASE_URL = "https://dduddeo.uk/3df/";
export const CHAT_URL = "https://crack.wrtn.ai/detail/6a598b5cbbbd7e30313b2270";
export const MAP_IMAGE_URL = "";

export const getImageUrl = (path: string) => `${BASE_URL}${path}`;

export const infectionStages = [
  { label: "감염 전 전신", percent: "0%", path: "hajin/b/1.webp", isSpoiler: false, isEvent: false },
  { label: "감염 전 말 걸기", percent: "0%", path: "hajin/b/2.webp", isSpoiler: false, isEvent: false },
  { label: "감염 전 인사", percent: "0%", path: "hajin/b/3.webp", isSpoiler: false, isEvent: false },
  { label: "물린 상처 은폐", percent: "사건", path: "hajin/b/4.webp", isSpoiler: false, isEvent: true },
  { label: "물림 인지", percent: "사건", path: "hajin/b/5.webp", isSpoiler: false, isEvent: true },
  { label: "10%", percent: "10%", path: "hajin/b/6.webp", isSpoiler: false, isEvent: false },
  { label: "20%", percent: "20%", path: "hajin/b/7.webp", isSpoiler: false, isEvent: false },
  { label: "30%", percent: "30%", path: "hajin/b/8.webp", isSpoiler: false, isEvent: false },
  { label: "40%", percent: "40%", path: "hajin/b/9.webp", isSpoiler: false, isEvent: false },
  { label: "50%", percent: "50%", path: "hajin/b/10.webp", isSpoiler: false, isEvent: false },
  { label: "60%", percent: "60%", path: "hajin/b/11.webp", isSpoiler: false, isEvent: false },
  { label: "66%", percent: "66%", path: "hajin/b/12.webp", isSpoiler: false, isEvent: false },
  { label: "72%", percent: "72%", path: "hajin/b/13.webp", isSpoiler: false, isEvent: false },
  { label: "80%", percent: "80%", path: "hajin/b/14.webp", isSpoiler: false, isEvent: false },
  { label: "85%", percent: "85%", path: "hajin/b/15.webp", isSpoiler: false, isEvent: false },
  { label: "90%", percent: "90%", path: "hajin/b/17.webp", isSpoiler: true, isEvent: false },
  { label: "95%", percent: "95%", path: "hajin/b/16.webp", isSpoiler: true, isEvent: false },
  { label: "97%", percent: "97%", path: "hajin/b/18.webp", isSpoiler: true, isEvent: false },
  { label: "99%", percent: "99%", path: "hajin/b/19.webp", isSpoiler: true, isEvent: false },
  { label: "100%", percent: "100%", path: "hajin/b/20.webp", isSpoiler: true, isEvent: false }
];

export const endings = [
  { label: "죽음 직전 눈맞춤", path: "hajin/b/21.webp", isEnding: false },
  { label: "자비로운 죽음", path: "hajin/b/22.webp", isEnding: true },
  { label: "영원히 함께", path: "hajin/b/23.webp", isEnding: true },
  { label: "사망", path: "hajin/b/24.webp", isEnding: false },
  { label: "잔혹한 현실", path: "hajin/b/25.webp", isEnding: true }
];

export const locations = [
  { id: 1, name: "교실", path: "loc/1.webp", zone: "폐교 거점" },
  { id: 2, name: "보안실", path: "loc/2.webp", zone: "폐교 거점" },
  { id: 3, name: "옥상", path: "loc/3.webp", zone: "폐교 거점" },
  { id: 4, name: "급식실", path: "loc/4.webp", zone: "폐교 거점" },
  { id: 5, name: "양호실", path: "loc/5.webp", zone: "폐교 거점" },
  { id: 6, name: "도서관", path: "loc/6.webp", zone: "폐교 거점" },
  { id: 7, name: "방송실", path: "loc/7.webp", zone: "폐교 거점" },
  { id: 8, name: "체육관", path: "loc/8.webp", zone: "폐교 거점" },
  { id: 9, name: "음악실", path: "loc/9.webp", zone: "폐교 거점" },
  { id: 10, name: "과학실", path: "loc/10.webp", zone: "폐교 거점" },
  { id: 11, name: "미술실", path: "loc/11.webp", zone: "폐교 거점" },
  { id: 12, name: "창고", path: "loc/12.webp", zone: "폐교 거점" },
  { id: 13, name: "교장실", path: "loc/13.webp", zone: "폐교 거점" },
  { id: 14, name: "텃밭", path: "loc/14.webp", zone: "폐교 거점" },
  { id: 15, name: "약국", path: "loc/15.webp", zone: "생존과 위험" },
  { id: 16, name: "마트", path: "loc/16.webp", zone: "생존과 위험" },
  { id: 17, name: "편의점", path: "loc/17.webp", zone: "생존과 위험" },
  { id: 18, name: "주유소", path: "loc/18.webp", zone: "생존과 위험" },
  { id: 19, name: "철물점", path: "loc/19.webp", zone: "생존과 위험" },
  { id: 20, name: "옷가게", path: "loc/20.webp", zone: "생존과 위험" },
  { id: 21, name: "병원", path: "loc/21.webp", zone: "생존과 위험" },
  { id: 22, name: "서점", path: "loc/22.webp", zone: "생존과 위험" },
  { id: 23, name: "놀이터", path: "loc/23.webp", zone: "기억과 작별" },
  { id: 24, name: "강변", path: "loc/24.webp", zone: "기억과 작별" },
  { id: 25, name: "육교", path: "loc/25.webp", zone: "기억과 작별" },
  { id: 26, name: "노래방", path: "loc/26.webp", zone: "기억과 작별" },
  { id: 27, name: "사진관", path: "loc/27.webp", zone: "기억과 작별" },
  { id: 28, name: "벚꽃길", path: "loc/28.webp", zone: "기억과 작별" },
  { id: 29, name: "교회", path: "loc/29.webp", zone: "기억과 작별" },
  { id: 30, name: "공터", path: "loc/30.webp", zone: "기억과 작별" },
  { id: 31, name: "복도", path: "loc/31.webp", zone: "폐교 거점" },
  { id: 32, name: "화장실", path: "loc/32.webp", zone: "폐교 거점" },
  { id: 33, name: "현관", path: "loc/33.webp", zone: "폐교 거점" },
  { id: 34, name: "발전실", path: "loc/34.webp", zone: "폐교 거점" },
  { id: 35, name: "하진의 옛집", path: "loc/35.webp", zone: "기억과 작별" },
  { id: 36, name: "지하철", path: "loc/36.webp", zone: "생존과 위험" },
  { id: 37, name: "세탁방", path: "loc/37.webp", zone: "생존과 위험" },
  { id: 38, name: "지구대", path: "loc/38.webp", zone: "생존과 위험" },
  { id: 39, name: "영화관", path: "loc/39.webp", zone: "기억과 작별" },
  { id: 40, name: "터널", path: "loc/40.webp", zone: "생존과 위험" }
];

export const featuredLocations = [1, 3, 5, 6, 15, 35, 39, 30];

export const zones = ["전체", "폐교 거점", "생존과 위험", "기억과 작별"];
